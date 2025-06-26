const request = require('supertest');
const app = require('../app');

describe('GET /api/products', () => {
  it('should return an array of products (can be empty)', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    
    if (res.body.length > 0) {
      expect(res.body[0]).toHaveProperty('name');
      expect(res.body[0]).toHaveProperty('price');
    }
  });
});   
