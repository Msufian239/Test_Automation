// const request = require('supertest');
const app = require('../../src/main.ts');  // Correct path to main.ts

describe('POST /orders', () => {
  it('should create a new order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        product_id: 1,  // Assuming product with ID 1 exists
        quantity: 10,
        product_name: 'Apple',
        price: 1.5,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

    expect(response.status).toBe(201);  // Status code for Created
    expect(response.body).toHaveProperty('product_name', 'Apple');
    expect(response.body).toHaveProperty('quantity', 10);
  });
/* This block of code is a series of test cases written using Jest framework for testing an Express API
endpoint related to orders. Each `describe` block represents a group of related test cases, and each
`it` block represents an individual test case within that group. */
});


describe('GET /orders', () => {
    it('should return a list of orders', async () => {
      const response = await request(app)
        .get('/api/orders');
  
      expect(response.status).toBe(200);  // Status code for OK
      expect(response.body).toBeInstanceOf(Array);  // Ensure it returns an array
    });
  });

  
  describe('GET /orders/:id', () => {
    it('should return an order by ID', async () => {
      const response = await request(app)
        .get('/api/orders/1');  // Assuming order with ID 1 exists
  
      expect(response.status).toBe(200);  // Status code for OK
      expect(response.body).toHaveProperty('product_name');
    });
  });

  
  describe('PATCH /orders/:id', () => {
    it('should update an order', async () => {
      const response = await request(app)
        .patch('/api/orders/1')  // Assuming order with ID 1 exists
        .send({
          quantity: 15,
        });
  
      expect(response.status).toBe(200);  // Status code for OK
      expect(response.body).toHaveProperty('quantity', 15);
    });
  });

  
  describe('DELETE /orders/:id', () => {
    it('should delete an order', async () => {
      const response = await request(app)
        .delete('/api/orders/1');  // Assuming order with ID 1 exists
  
      expect(response.status).toBe(200);  // Status code for OK
      expect(response.body).toHaveProperty('message', 'Order deleted successfully');
    });
  });
  