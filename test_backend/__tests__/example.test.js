import Mongoose from 'mongoose';
import request from 'supertest';

import server from '#config/server/app';

import factory from '#utils/factories';

describe('teste template', () => {
  beforeEach(async () => {
    await Mongoose.connection.dropDatabase();
  });

  it('the project was successfully installed', async () => {
    const response = await request(server).get('/test');

    expect(response.status).toBe(200);
  });

  it('the database is properly configured', async () => {
    const response = await factory.create('example');
    expect(response).toHaveProperty('_id');
  });
});
