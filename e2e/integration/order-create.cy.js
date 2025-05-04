// cypress/integration/order-create.cy.js
import OrderCreate from "../../support/pages/orderCreate.page.js";
import OrderDetails from "../../support/pages/orderDetails.page.js";

describe("Create and Update Multiple Orders E2E Tests", () => {
  const orderCount = 50; // Create 5 orders

  for (let i = 1; i <= orderCount; i++) {
    it(`should create order ${i}, then navigate to the created order and update the quantity`, () => {
      // Step 1: Visit the products list page
      cy.visit("http://localhost:4200/products/list");

      // Step 2: Click on the 'Create' button to create a new order
      cy.get('a[routerlink="/products/create"]').click();

      // Step 3: Wait for the form elements to be visible and fill out the form
      OrderCreate.fillOrderForm(`Test Product ${i}`, "Product Description", "100", "2");

      // Step 4: Submit the form to create the order
      OrderCreate.submitOrderForm();

      // Step 5: Verify that the user is redirected to the order list page
      OrderCreate.verifyOrderPage();

      // Step 6: Find the newly created order and click on it
      // Using `.last()` to select the most recent order created (since order IDs increase)
      cy.get('a[class="btn btn-success"]').last().click(); // Clicking the "Order" link of the last created order

      // Step 7: Update the quantity field in the order details (let's increase the quantity to 5 for each order)
      OrderDetails.updateQuantity("5");

      // Step 8: Submit the updated order form
      OrderDetails.submitOrderUpdate();

      // Step 9: Verify that the order is updated and the user is redirected to the order list page
      OrderDetails.verifyOrderUpdated();
    });
  }
});
