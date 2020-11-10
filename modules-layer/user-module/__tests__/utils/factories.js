import { factory } from 'factory-girl';
import faker from 'faker';


import User from '#schemas/User.js';

factory.define('User', User, {
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  password_hash: faker.internet.password(),
  photo_profile: faker.image.people(),
  date_birth: faker.date.past(),
  phone_number: faker.phone.phoneNumber(),
  country: faker.address.country(),
  state: faker.address.state(),
  group: 'admin',
  date_last_login: faker.date.past(),
  locale_last_login: `${faker.address.latitude()};${faker.address.longitude()}`,
});

export default factory;
