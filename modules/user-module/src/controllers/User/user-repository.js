import User from '../../schemas/User';

class UserRepository extends Error {
  async getUserById(userId) {
    const userById = await User.findById(userId);
    if (userById) {
      return userById;
    }

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
    if (updatedUser) {
      return updatedUser;
    }

    throw new Error(`Could not update user ${userId}`);
  }

  async deleteUserById(userId) {
    if (await User.findByIdAndDelete(userId)) {
      return true;
    }
    throw new Error(`It was not possible to delete the user ${userId}`);
  }

  async checkDuplicateEmail(email) {
    let isDuplicate = false;
    const user = await User.findOne({ email });

    if (user) {
      isDuplicate = true;
    }
    return isDuplicate;
  }

  async login(userEmail, userPassword) {
    const isEmail = this.checkEmail(userEmail);
    const isPassword = this.checkPassword(userPassword);

    if(isEmail && isPassword) {
      return true;
    }
    return false;
  }

  async checkEmail(userEmail) {
    const userByEmail = await User.findOne({ email: userEmail });
    if (userByEmail) {
      return userByEmail;
    }

    throw new Error(`Could not find user with email ${userEmail}`);
  }

  async checkPassword(user, userPassword) {
    if (user.password_hash === userPassword) {
      return true;
    }
    throw new Error(`Unable to login with this password`);
  }
}

export default new UserRepository();
