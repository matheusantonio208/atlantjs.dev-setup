import Jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth-config';
import User from './user-repository';
import {loggedUserObject} from './user-object';

class SessionController {
  async store(req, res) {
    try {
      const isLogged = await User.login(loggedUserObject(req.body));

      if (isLogged) {
        const user = await User.checkEmail(loggedUserObject(req.body).email);

        const userAccessToken = {
          user: { id: user.id, name: user.first_name },
          token: Jwt.sign(
            { id: user.id, name: user.first_name },
            authConfig.secret_key,
            {
              expiresIn: authConfig.expiresIn,
            },
          ),
        };

        return res.status(201).json(userAccessToken);
      }

      return false;
    } catch (error) {
      return res.status(401).json({ error_msg: error.toString() });
    }
  }
}

export default new SessionController();
