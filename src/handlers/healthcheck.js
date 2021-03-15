import middy from 'middy';
import httpMiddleware from 'Middlewares/httpMiddleware';
import app from 'Config/app';

const originalHandler = async () => {
  return 'healthcheck: OK';
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(httpMiddleware({ debugMode: app.debug }));
