const request = require('supertest');
const app = require('../src/app');

describe('API Users', () => {
  it('GET /api/users -> 200', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it('POST /api/users -> 201', async () => {
    const res = await request(app).post('/api/users').send({ name: 'Luis' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Luis');
  });

  it('POST /api/users fails without name -> 400', async () => {
    const res = await request(app).post('/api/users').send({});
    expect(res.statusCode).toBe(400);
  });
});
