import { Router } from 'express';

class Routes {
  constructor() {
    this.route = new Router();

    this.exampleRoute('/');
  }

  exampleRoute(baseRoute) {
    this.route.get(`${baseRoute}`, (req, res) => {
      return res.status(200).json({
        success_msg: 'Welcome to Atlantjs. Onde sua criatividade vira realidade.',
      });
    });
  
    this.route.post(`${baseRoute}/db`, (req, res) => {
      return res.status(201).json({ success_msg: 'Already!' });
    });
  }
}

export default new Routes().route;
