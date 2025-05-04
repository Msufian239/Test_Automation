const request = require('supertest');
const app = require('../../src/main.ts');  // Correct path to main.ts

describe('POST /products', () => {
  it('should create a new product', async () => {
    const response = await request(app).post('/api/products').send({
      name: 'Apple',
      description: 'A fresh red apple',
      price: 1.5,
    });

    expect(response.status).toBe(201); // Status code for Created
    expect(response.body).toHaveProperty('name', 'Apple');
    expect(response.body).toHaveProperty('price', 1.5);
  });
});

describe('GET /products', () => {
  it('should return a list of products', async () => {
    const response = await request(app).get('/api/products');

    expect(response.status).toBe(200); // Status code for OK
    expect(response.body).toBeInstanceOf(Array); // Ensure it returns an array
    expect(response.body.length).toBeGreaterThan(0); // At least one product exists
  });
});

describe('GET /products/:id', () => {
  it('should return a product by ID', async () => {
    const response = await request(app).get('/api/products/1'); // Assuming product with ID 1 exists

    expect(response.status).toBe(200); // Status code for OK
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('description');
  });
});

describe('PUT /products/:id', () => {
  it('should update a product', async () => {
    const response = await request(app)
      .put('/api/products/1') // Assuming the product with ID 1 exists
      .send({
        name: 'Green Apple',
        description: 'A fresh green apple',
        price: 2.0,
      });

    expect(response.status).toBe(200); // Status code for OK
    expect(response.body).toHaveProperty('name', 'Green Apple');
    expect(response.body).toHaveProperty('price', 2.0);
  });
});

describe('DELETE /products/:id', () => {
  it('should delete a product', async () => {
    const response = await request(app).delete('/api/products/1'); // Assuming the product with ID 1 exists

    expect(response.status).toBe(200); // Status code for OK
    expect(response.body).toHaveProperty(
      'message',
      'Product deleted successfully',
    );
  });
});
