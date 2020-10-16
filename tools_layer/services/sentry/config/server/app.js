import SentryConnect from '#config/sentry-connect';

class App {
  middlewares(){
    this.server.use(SentryConnect.requestHandler())
  }
  routes() {
    this.server.use(SentryConnect.errorHandler())
  }
}

export default new App().server;