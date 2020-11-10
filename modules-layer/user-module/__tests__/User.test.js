import request from 'supertest';
import Mongoose from 'mongoose';
import server from '#config/server/api-config.js';

import factory from './utils/factories.js';

describe('Session', () => {
  it('The user must be able to log into the application', async () => {
    const user = await factory.create('User');

    const response = await request(server).post('/session/login').send({
      email: user.email,
      password_hash: user.password_hash,
    });

    expect(response.status).toBe(201);
  });
});

describe('User', () => {
  beforeEach(async () => {
    await Mongoose.connection.dropDatabase();
  });

  it('The user must register', async () => {
    const response = await factory.create('User');

    expect(response).toHaveProperty('_id');
  });

  it('The user should not be able to register repeated email', async () => {
    const user = await factory.attrs('User');

    await request(server).post('/user/registration').send(user);

    const response = await request(server)
      .post('/user/registration')
      .send(user);

    expect(response.status).toBe(400);
  });

  it('The user must be able to access their own information', async () => {
    const user = await factory.create('User');

    const req = await request(server).post('/session/login').send({
      email: user.email,
      password_hash: user.password_hash,
    });

    const { token } = req.body;

    const response = await request(server)
      .get(`/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it("The user must not be able to access another user's information", async () => {
    const userA = await factory.create('User');
    const userB = await factory.create('User');

    const reqUserA = await request(server).post('/session/login').send({
      email: userA.email,
      password_hash: userA.password_hash,
    });

    const { token } = reqUserA.body;

    const res = await request(server)
      .get(`/user/${userB.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(401);
  });

  it('The user must be able to delete his account', async () => {
    const user = await factory.create('User');

    const req = await request(server).post('/session/login').send({
      email: user.email,
      password_hash: user.password_hash,
    });

    const { token } = req.body;

    const res = await request(server)
      .delete(`/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
  });

  it("The user should not be able to delete another user's account", async () => {
    const userA = await factory.create('User');
    const userB = await factory.create('User');

    const req = await request(server).post('/session/login').send({
      email: userA.email,
      password_hash: userA.password_hash,
    });

    const { token } = req.body;

    const res = await request(server)
      .delete(`/user/${userB.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(401);
  });

  it('The user must be able to update his registration information', async () => {
    const user = await factory.create('User');

    const req = await request(server).post('/session/login').send({
      email: user.email,
      password_hash: user.password_hash,
    });

    const { token } = req.body;

    const res = await request(server)
      .put(`/user/${user.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
  });

  it("The user must not be able to update another user's registration information", async () => {
    const userA = await factory.create('User');
    const userB = await factory.create('User');
    const updatedUser = await factory.attrs('User');

    const req = await request(server).post('/session/login').send({
      email: userA.email,
      password_hash: userA.password_hash,
    });

    const { token } = req.body;

    const res = await request(server)
      .put(`/user/${userB.id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedUser);

    expect(res.status).toBe(401);
  });
});
