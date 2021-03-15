export default class AuthException extends Error {
  constructor(
    message,
    errorCode = 'AUTH_EXCEPTION',
    httpStatusCode = 403,
    extra
  ) {
    super();
    this.name = 'AuthException';
    this.message = message;
    this.statusCode = httpStatusCode;
    this.code = errorCode;

    Error.captureStackTrace(this, this.constructor);

    if (extra) this.extra = extra;
  }
}
