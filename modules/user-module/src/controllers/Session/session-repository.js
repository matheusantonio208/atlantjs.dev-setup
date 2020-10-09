import User from '../../schemas/User';

class SessionRepository extends Error {
  async checkEmail(userEmail) {
    const user = await User.findOne({ email: userEmail });
    if (user) {
      return user;
    }

    throw new Error(`Unable to login with this email ${userEmail}`);
  }

  async checkPassword(user, userPassword) {
    if (user.password_hash === userPassword) {
      return true;
    }
    throw new Error(`Unable to login with this password`);
  }
}

export default new SessionRepository();
