import client from 'Config/client';
import AuthException from 'Exceptions/AuthException';
import { errorHttpResponseAfterHandler } from 'Middlewares/errorHttpResponseMiddleware';

export const authMiddlewareBeforeHandler = (handler, next) => {
  const xApiKey =
    handler.event.headers['X-Api-Key'] || handler.event.headers['x-api-key'];

  const site = Object.keys(client).filter(siteId => {
    return client[siteId].apiKey === xApiKey;
  });

  if (site.length === 0) {
    throw new AuthException(
      'Invalid api key provided',
      'AUTH_INVALID_API_KEY',
      403,
      'Ensure you are using the correct api key provided'
    );
  }

  // eslint-disable-next-line no-param-reassign
  handler.event.site = {
    id: site[0],
  };

  next();
};

/* istanbul ignore next */
const authMiddleware = () => {
  return {
    before: (handler, next) => authMiddlewareBeforeHandler(handler, next),
    onError: (handler, next) => errorHttpResponseAfterHandler(handler, next),
  };
};

export default authMiddleware;
