//  cypress/support/pages/navbar.page.js
class Navbar {
  visit() {
    cy.visit("http://localhost:4200/");
  }

  clickProductsLink() {
    cy.get('a[routerLink="/products"]').eq(0).click();
  }

  clickOrdersLink() {
    cy.get('a[routerLink="/orders"]').click();
  }

  verifyNavbarVisibility() {
    cy.get("nav").should("be.visible");
  }

  verifyLinks() {
    cy.get('a[routerLink="/products"]').should("contain", "Products");
    cy.get('a[routerLink="/orders"]').should("contain", "Orders");
  }
}

export default new Navbar();
