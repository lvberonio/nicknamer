import authMiddleware, {
  authMiddlewareBeforeHandler,
} from '../../src/middlewares/authMiddleware';

describe('test authMiddleware', () => {
  test('should return object', async () => {
    const result = authMiddleware();
    expect(result).toHaveProperty('before');
    expect(result).toHaveProperty('onError');
  });
});

const next = () => {};

describe('test authMiddlewareBeforeHandler', () => {
  test('should throw AuthException when invalid api key is provided', async () => {
    const handler = {
      event: {
        headers: {
          'X-Api-Key': '123',
        },
      },
    };

    try {
      expect(await authMiddlewareBeforeHandler(handler, next)).toThrow();
    } catch (error) {
      expect(error.name).toBe('AuthException');
      expect(error.message).toBe('Invalid api key provided');
      expect(error.statusCode).toBe(403);
      expect(error.code).toBe('AUTH_INVALID_API_KEY');
    }
  });

  test('should return success with valid api key', () => {
    const handler = {
      event: {
        headers: {
          'x-api-key': process.env.AWS_APIGATEWAY_SA_KEY,
        },
      },
    };

    authMiddlewareBeforeHandler(handler, next);
  });
});
