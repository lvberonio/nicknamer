import middy from 'middy';
import httpMiddleware from 'Middlewares/httpMiddleware';
import authMiddleware from 'Middlewares/authMiddleware';
import isEmpty from 'Utils/isEmpty';
import logger from 'Utils/logger';

const humanNames = require('human-names');

const originalHandler = event => {
  const {
    input,
    site: { id: siteId },
  } = event;

  logger.info('RECEIVED REQUEST', { input, siteId });

  let fname = '';
  let lname = '';

  if (input === null || isEmpty(input.sex)) {
    fname = humanNames.allRandom();
    lname = humanNames.allRandom();
  } else if (input.sex === 'female') {
    fname = humanNames.femaleRandom();
    lname = humanNames.femaleRandom();
  } else if (input.sex === 'male') {
    fname = humanNames.maleRandom();
    lname = humanNames.maleRandom();
  }

  logger.info('RESPONSE SENT', { fname, lname });

  return new Promise(resolve => {
    resolve({
      fname,
      lname,
      uname: fname + lname,
    });
  });
};

// eslint-disable-next-line import/prefer-default-export
export const handler = middy(originalHandler);

handler.use(authMiddleware());
handler.use(httpMiddleware());
