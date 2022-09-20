/// <reference types="cypress" />


const addToCart = () => {
  cy.get('.card__product:nth-child(2) .btn__add').click();
  cy.get('.card__product:nth-child(3) .btn__add').click();
  cy.get('.card__product:nth-child(4) .btn__add').click();
}

describe('Container App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/#/');

  })

  it('page can be open', () => {
    cy.contains("Home")
  });

  it('page should redirect to MFE1 and add three products to cart', () => {
    cy.get('.link__category:nth-child(1) .categories__name').click();

    addToCart()

    cy.contains("3")

  });

  it('should render Cart Page and delete all products', () => {
    cy.get('.link__category:nth-child(1) .categories__name').click();
    addToCart()
    cy.contains("3")
    cy.get('.cart').click();
    cy.get('.btn__delete').click({ multiple: true });
  });

}); 
