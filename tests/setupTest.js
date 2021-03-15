/* eslint no-console: 0 */

// Add test-specific environment configurations
process.env.APP_ENV = 'test';
process.env.APP_DEBUG = true;
process.env.AWS_ACCOUNT_REGION = 'ap-southeast-1';
process.env.AWS_ACCOUNT_ID = '111111111111';

process.env.AWS_APIGATEWAY_DEFAULT_KEY = '1111';
process.env.AWS_APIGATEWAY_SA_KEY = '2222';
process.env.AWS_APIGATEWAY_WYP_KEY = '3333';
process.env.AWS_APIGATEWAY_FD_KEY = '4444';
