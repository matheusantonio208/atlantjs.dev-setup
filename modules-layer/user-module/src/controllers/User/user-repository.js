import User from '#schemas/User.js';

class UserRepository extends Error {
  async getUserById(userId) {
    const userFoundById = await User.findById(userId);

    if (userFoundById) return userFoundById;

    throw new Error(`Could not find user with id ${userId}`);
  }

  async createUser(userData) {
    const newUser = new User(userData);

    if (newUser) {
      await newUser.save();
      return newUser;
    }

    throw new Error(`Could not create user ${userData.user_name}`);
  }

  async updateUserById(userId, userData) {
    const updatedUser = await User.findByIdAndUpdate(userId, userData);

    if (updatedUser) return updatedUser;

    throw new Error(`Could not update user ${userId}`);
  }

  async deleteUserById(userId) {
    if (await User.findByIdAndDelete(userId)) return true;

    throw new Error(`It was not possible to delete the user ${userId}`);
  }

  async checkDuplicateEmail(email) {
    const hasUserEmail = await User.findOne({ email });
    return !!hasUserEmail;
  }

  async login(userEmail, userPassword) {
    const isEmail = await this.checkEmail(userEmail);
    const isPassword = await this.checkPassword(isEmail, userPassword);

    return !!(isEmail && isPassword);
  }

  async checkEmail(userEmail) {
    const userFoundByEmail = await User.findOne({ email: userEmail });

    if (userFoundByEmail) return userFoundByEmail;

    throw new Error(`Could not find user with email ${userEmail}`);
  }

  async checkPassword(userFoundByEmail, userPassword) {
    if (userFoundByEmail.password_hash === userPassword) return true;

    throw new Error(`Unable to login with this password`);
  }
}

export default new UserRepository();
