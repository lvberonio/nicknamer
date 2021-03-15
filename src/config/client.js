export default {
  default: {
    apiKey: process.env.AWS_APIGATEWAY_DEFAULT_KEY,
  },
  sa: {
    apiKey: process.env.AWS_APIGATEWAY_SA_KEY,
  },
  wyp: {
    apiKey: process.env.AWS_APIGATEWAY_WYP_KEY,
  },
  fd: {
    apiKey: process.env.AWS_APIGATEWAY_FD_KEY,
  },
};
