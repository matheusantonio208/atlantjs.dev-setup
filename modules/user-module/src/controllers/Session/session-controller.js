import Jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth-config';
import Session from './session-repository';

class SessionController {
  async store(req, res) {
    try {
      const { email, password_hash } = req.body;

      const user = await Session.checkEmail(email);
      const isPassword = await Session.checkPassword(user, password_hash);

      if (isPassword) {
        const loggedUser = {
          user: { id: user.id, name: user.first_name },
          token: Jwt.sign(
            { id: user.id, name: user.first_name },
            authConfig.secret_key,
            {
              expiresIn: authConfig.expiresIn,
            },
          ),
        };

        return res.status(201).json(loggedUser);
      }

      return false;
    } catch (error) {
      return res.status(401).json({ error_msg: error.toString() });
    }
  }
}

export default new SessionController();
