import './env-loader';
import express from 'express';
import handlebars from 'express-handlebars';
import { resolve } from 'path';

// import Database from '#config/databaseDB/db-connect';

import routes from '#controllers/routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.views();

    // Database.start();
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
        helpers: resolve(__dirname, '#views', 'helpers'),
        layoutsDir: resolve(__dirname, '#views', 'layouts'),
        partialsDir: resolve(__dirname, '#views', 'partials'),
      }),
    );
    this.server.set('views', resolve('#views'));
  }
}

export default new App().server;
