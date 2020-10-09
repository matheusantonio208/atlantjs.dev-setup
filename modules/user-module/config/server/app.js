import './env-loader';
import { resolve } from 'path';

import express from 'express';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';

import routes from '../../src/controllers/routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.views();

    this.mongoDB();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  views() {
    this.server.set('view engine', '.hbs');
    this.server.engine(
      '.hbs',
      handlebars({
        defaultLayout: 'default',
        extname: 'hbs',
        helpers: resolve(__dirname, '..', '..', 'src', 'views', 'helpers'),
        layoutsDir: resolve(__dirname, '..', '..', 'src', 'views', 'layouts'),
        partialsDir: resolve(__dirname, '..', '..', 'src', 'views', 'partials'),
      }),
    );
    this.server.set('views', resolve('..', '..', 'src', 'views'));
  }

  mongoDB() {
    mongoose.connect(process.env.MONGO_URL_CONNECTION, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  }
}

export default new App().server;
