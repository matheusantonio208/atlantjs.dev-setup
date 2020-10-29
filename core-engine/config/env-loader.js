const dotenv = require('dotenv');
const { NODE_ENV } = process.env;

dotenv.config({ path: NODE_ENV === 'test' ? '.env.test' : '.env' });
