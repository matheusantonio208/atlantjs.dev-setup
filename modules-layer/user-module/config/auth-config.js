const { AUTH_KEY } = process.env;
export default {
  secret_key: AUTH_KEY,
  expiresIn: '7d',
};
