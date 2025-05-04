// cypress/support/pages/orderDetails.page.js
class OrderDetails {
    // Method to update the quantity of the order
    updateQuantity(newQuantity) {
      cy.get('input[formControlName="quantity"]').clear().type(newQuantity); // Clear the current value and type the new quantity
    }
  
    // Method to submit the form
    submitOrderUpdate() {
      cy.get('button[type="submit"]').click(); // Submit the form with the updated quantity
    }
  
    // Method to verify if the order is updated and redirected to the order list page
    verifyOrderUpdated() {
      cy.url().should('include', '/orders/list');  // Ensure the user is redirected to the orders list page after updating
    }
  }
  
  export default new OrderDetails();
  