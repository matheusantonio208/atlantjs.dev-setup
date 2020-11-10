import Jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '#config/auth-config.js';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error_msg: 'Token not provider' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(Jwt.verify)(token, authConfig.secret_key);
    req.userId = decoded.id;
    req.userName = decoded.first_name;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
