import User from './user-repository';
import JobQueue from '../../../lib/JobQueue';

import JobWelcomeNewUser from '../../jobs/emails/WelcomeNewUser';
import JobUpdatedUser from '../../jobs/emails/UpdatedUser';
import JobDeletedUser from '../../jobs/emails/DeletedUser';

class UserController {
  async show(req, res) {
    try {
      const userId = req.params.userId || req.body.user_id;

      if (req.userId === userId) {
        const user = await User.getUserById(userId);
        return res.json(user);
      }
      return res.status(401).json({
        error_msg:
          'The User must be logged in to have access to the information',
      });
    } catch (error) {
      return res.status(401).json({ error_msg: error.toString() });
    }
  }

  async store(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password_hash,
        photo_profile,
        date_birth,
        phone_number,
        country,
        state,
        group,
        date_last_login,
        locale_last_login,
        account_status,
      } = req.body;

      if (await User.checkDuplicateEmail(email)) {
        return res.status(400).json({ error_msg: 'Email already register' });
      }

      const user = await User.createUser({
        first_name,
        last_name,
        email,
        password_hash,
        photo_profile,
        date_birth,
        phone_number,
        country,
        state,
        group,
        date_last_login,
        locale_last_login,
        account_status,
      });

      if (user) {
        await JobQueue.add(JobWelcomeNewUser.key, user);
      }

      return res.json(user);
    } catch (error) {
      return res.status(401).json({ error_msg: error.toString() });
    }
  }

  async update(req, res) {
    try {
      const userId = req.params.userId || req.body.user_id;

      if (userId !== req.userId) {
        return res.status(401).json({
          error_msg:
            'This user needs to be authenticated to change their information',
        });
      }

      const {
        first_name,
        last_name,
        email,
        password_hash,
        photo_profile,
        date_birth,
        phone_number,
        country,
        state,
      } = req.body;

      const user = await User.updateUserById(userId, {
        first_name,
        last_name,
        email,
        password_hash,
        photo_profile,
        date_birth,
        phone_number,
        country,
        state,
      });

      if (user && req.body.password_hash) {
        await JobQueue.add(JobUpdatedUser.key, {
          user,
          message_operation: 'A sua senha foi alterada',
        });
      }

      if (user && req.body.email) {
        await JobQueue.add(JobUpdatedUser.key, {
          user,
          message_operation: 'O seu email foi alterado',
        });
      }

      return res.json(user);
    } catch (error) {
      return res.status(401).json({ error_msg: error.toString() });
    }
  }

  async delete(req, res) {
    try {
      const userId = req.params.userId || req.body.user_id;

      if (req.userId === userId) {
        const findUser = await User.getUserById(userId);
        const isDeleted = await User.deleteUserById(userId);

        await JobQueue.add(JobDeletedUser.key, findUser);

        return res.status(200).json(isDeleted);
      }

      return res.status(401).json({
        error_msg: 'The user must be logged in to delete his account',
      });
    } catch (error) {
      return res.status(401).json({ error_msg: error.toString() });
    }
  }
}

export default new UserController();
