import '#config/env-loader';
import express from 'express';
import cors from 'cors';
import * as YouchLogs from '#config/debugger/youch-config'

// After installing the database layer, add a new variable as in the example:
// import Database from '#config/databaseDB/db-connect';

import routes from '#controllers/routes-api';

class ApiConfig {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    // Database.start();
  }
  
  middlewares() {
    this.server.use(cors());
    this.server.use(YouchLogs);
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new ApiConfig().server;
