/* eslint-disable no-console */
import mongoose from 'mongoose';

class MongoConnect {
  start() {
    mongoose.connect(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`,
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
