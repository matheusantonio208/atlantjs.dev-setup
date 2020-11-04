import '#config/env-loader.js';
import express from 'express';
import cors from 'cors';
import YouchLogs from '#config/debug/youch-config.js'

// After installing the database layer, add a new variable as in the example:
// import DatabaseDB from '#config/db-database/db-connect.js';

import routes from '#controllers/routes-api.js';

class ApiConfig {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    // DatabaseDB.start();
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
