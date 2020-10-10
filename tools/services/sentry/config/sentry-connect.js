import * as Sentry from '@sentry/node';
import sentryConfig from '#config/sentry-config'

class SentryConnect {
  constructor(){
    Sentry.init(sentryConfig);
  }

  requestHandle() {
    return Sentry.Handlers.requestHandler();
  }

  errorHandler() {
    return Sentry.Handlers.errorHandler()
  }
} 

export default new SentryConnect();