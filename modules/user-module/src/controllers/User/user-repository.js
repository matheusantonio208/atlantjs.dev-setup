import User from '../../schemas/User';

class UserRepository extends Error {
  async getUserById(userId) {
    const getUser = await User.findById(userId);
    if (getUser) {
      return getUser;
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
}

export default new UserRepository();
