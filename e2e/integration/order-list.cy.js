// cypress/integration/order-list.cy.js
import OrderList from '../../support/pages/orderList.page.js';

describe('Order List E2E Tests', () => {
  it('should display orders in the list', () => {
    cy.visit('http://localhost:4200/orders/list');

    // Verifying the order list is visible and contains orders
    cy.get('table').should('be.visible');  // Check if the table is visible
    cy.get('td').should('have.length.greaterThan', 0);  // Ensure there are multiple table cells (indicating orders)
  });

  it('should delete the first order and verify its removal', () => {
    cy.visit('http://localhost:4200/orders/list');

    // Step 1: Get the first order ID from the first row
    OrderList.getFirstOrderId().then((firstOrderId) => {
      // Step 2: Delete the first order based on its ID
      OrderList.deleteFirstOrder();

      // Step 3: Verify that the first order is deleted
      OrderList.verifyFirstOrderDeletion();

      // Step 4: Verify the next order is now the first one in the list
      cy.get('table tbody tr').first().find('td').first().should('not.have.text', firstOrderId);  // Ensure the new first order ID is different
    });
  });
});
