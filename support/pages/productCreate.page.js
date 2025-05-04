class ProductCreate {
  // Method to generate a unique product name using a timestamp
  generateUniqueProductName() {
    return `Test Product ${Date.now()}`; // Unique product name with timestamp
  }

  // Method to click the "Create" button and navigate to the product creation page
  navigateToCreatePage() {
    cy.get('a[routerlink="/products/create"]').click();  // Click on the "Create" button
  }

  // Method to fill the product creation form with a unique product name
  fillProductForm(name, description, price) {
    cy.get('input[formControlName="name"]').type(name);  // Fill out the product name
    cy.get('textarea[formControlName="description"]').type(description);  // Fill out the product description
    cy.get('input[formControlName="price"]').type(price);  // Fill out the product price
  }

  // Method to submit the product creation form
  submitProductForm() {
    cy.get('button[type="submit"]').click();  // Click the submit button
  }

  // Method to verify if the user is redirected to the product list page
  verifyProductPage() {
    cy.url().should("include", "/products/list");  // Ensure the user is redirected to the product list page
    cy.get('table', { timeout: 10000 }).should('be.visible');  // Ensure the table is visible
  }

  // Method to check if the latest product appears in the list
  verifyLatestProductInList(productName) {
    // Wait for the table to load and ensure that the product list contains the latest product
    cy.get('table tbody tr').should('have.length.greaterThan', 0);  // Ensure there are rows in the table
    cy.get('table tbody tr').last().within(() => { // Get the last row, which should be the newly created product
      cy.get('td').first().should('have.text', productName);  // Check if the first column contains the unique product name
    });
  }
}

export default new ProductCreate();
