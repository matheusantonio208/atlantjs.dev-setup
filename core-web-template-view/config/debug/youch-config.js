import Youch from 'youch';
import 'express-async-errors';


export default async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toJSON();
    return res.status(500).json(errors);
  };

  return res.status(500).json({ error: 'Internal server error' });
}