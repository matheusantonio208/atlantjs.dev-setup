import nodemailer from 'nodemailer';
import nodemailerHbs from 'nodemailer-express-handlebars';
import handlebars from 'express-handlebars';

import { resolve } from 'path';

import mailConfig from '../config/mail-config';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });

    this.configureTemplate();
  }

  configureTemplate() {
    const viewPath = resolve(__dirname, '..', 'src', 'views', 'emails');

    this.transporter.use(
      'compile',
      nodemailerHbs({
        viewEngine: handlebars.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'layout-default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      }),
    );
  }

  sendEmail(message) {
    return this.transporter.sendMail({
      ...mailConfig.default,
      ...message,
    });
  }
}

export default new Mail();
