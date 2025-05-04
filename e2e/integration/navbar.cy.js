// cypress/integration/navbar.spec.js
import Navbar from '../../support/pages/navbar.page.js';

describe('Navbar E2E Tests', () => {
  it('should display the navbar and links', () => {
    Navbar.visit("http://localhost:4200/");
    Navbar.verifyNavbarVisibility();
    Navbar.verifyLinks();
  });

  it('should navigate to the products page when the "Products" link is clicked', () => {
    Navbar.visit("http://localhost:4200/products/list");
    Navbar.clickProductsLink();
    cy.url().should('include', '/products');
  });

  it('should navigate to the orders page when the "Orders" link is clicked', () => {
    Navbar.visit("http://localhost:4200/orders/list");
    Navbar.clickOrdersLink();
    cy.url().should('include', '/orders');
  });
});
