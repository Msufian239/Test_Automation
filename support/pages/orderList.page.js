// cypress/support/pages/orderList.page.js
class OrderList {
  // Method to get the first order ID from the table (first row)
  getFirstOrderId() {
    return cy.get('table tbody tr').first().find('td').first().invoke('text');  // Get the first cell text (Order ID)
  }

  // Method to delete the first order based on the order ID
  deleteFirstOrder() {
    cy.get('table tbody tr').first().find('button.btn-danger').click();  // Find the delete button in the first row and click it
  }

  // Method to verify if the first order is deleted (by checking the new first row)
  verifyFirstOrderDeletion() {
    cy.get('table tbody tr').first().should('not.have.text', '3');  // Ensure the first row doesn't contain the deleted ID ('3')
  }
}

export default new OrderList();
