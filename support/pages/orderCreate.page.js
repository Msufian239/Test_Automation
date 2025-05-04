// cypress/support/pages/orderCreate.page.js
class OrderCreate {
  // Method to fill out the order form
  fillOrderForm(productName, description, price, quantity) {
    // Wait for the element to be visible and then type the values
    cy.get('input[formControlName="name"]', { timeout: 10000 }).should('be.visible').type(productName); // Product Name input
    cy.get('textarea[formControlName="description"]', { timeout: 10000 }).should('be.visible').type(description); // Product Description input
    cy.get('input[formControlName="price"]', { timeout: 10000 }).should('be.visible').type(price); // Product Price input
  }

  // Method to submit the order form
  submitOrderForm() {
    cy.get('button[type="submit"]').click(); // Click on the 'Create' button to submit the form
  }

  // Method to verify the order page (after form submission)
  verifyOrderPage() {
    cy.url().should("include", "/products/list"); // Ensure user is redirected to the products list page
  }
}

export default new OrderCreate();
