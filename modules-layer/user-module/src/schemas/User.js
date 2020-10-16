import Mongoose from 'mongoose';

const userSchema = new Mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  photo_profile: {
    type: String,
  },
  date_birth: {
    type: Date,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
    enum: ['admin', 'pro-plan', 'free-plan'],
  },
  date_last_login: {
    type: String,
  },
  locale_last_login: {
    type: String,
  },
  account_status: {
    type: String,
    required: true,
    enum: ['active', 'disabled', 'waiting_deleted'],
    default: 'active',
  },
});
export default Mongoose.model('users', userSchema);
