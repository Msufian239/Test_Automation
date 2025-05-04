import ProductCreate from '../../support/pages/productCreate.page.js';

describe('Product Create E2E Tests', () => {
  it('should create a product and verify it appears in the product list', () => {
    // Step 1: Generate a unique product name
    const uniqueProductName = ProductCreate.generateUniqueProductName();  // Generate unique name using timestamp

    // Step 2: Navigate to the product creation page
    cy.visit('http://localhost:4200/products/list');  // Visit the product list page
    ProductCreate.navigateToCreatePage();  // Navigate to the product creation page

    // Step 3: Fill out the product creation form with the unique product name
    ProductCreate.fillProductForm(uniqueProductName, 'Product Description', '100');  // Use the unique product name

    // Step 4: Submit the form
    ProductCreate.submitProductForm();  // Submit the product creation form

    // Step 5: Verify that the product list page contains the newly created product
    cy.contains(uniqueProductName).should('be.visible');  // Ensure the product name is present in the list
  });
});
