import express from 'express';
import handlebars from 'express-handlebars';
import { resolve } from 'path';

class ApiConfig {
  constructor() {
    this.server = express();

    //^this.middlewares();
    //^this.routes();
    this.views();
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

export default new ApiConfig().server;
