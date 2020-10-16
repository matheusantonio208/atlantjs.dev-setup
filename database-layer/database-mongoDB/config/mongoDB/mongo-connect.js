/* eslint-disable no-console */
import mongoose from 'mongoose';

class MongoConnect {
  start() {
    const {
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_HOST,
      MONGO_PORT,
      MONGO_DB_NAME,
    } = process.env;

    mongoose.connect(
      `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}?authSource=admin`,
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
      },
    );

    mongoose.connection.on('error', () =>
      console.error('Mongo connection error:'),
    );
    mongoose.connection.once('open', () =>
      console.log('Mongo database connected!'),
    );
  }
}

export default new MongoConnect();
