import SentryConnect from '#config/sentry-connect.js';

class ApiConfig {
  middlewares(){
    this.server.use(SentryConnect.requestHandler())
  }
  routes() {
    this.server.use(SentryConnect.errorHandler())
  }
}

export default new ApiConfig().server;