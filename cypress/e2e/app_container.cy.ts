/// <reference types="cypress" />


const addToCart = () => {
  cy.get('.card__product:nth-child(2) .btn__add').click();
  cy.get('.card__product:nth-child(3) .btn__add').click();
  cy.get('.card__product:nth-child(4) .btn__add').click();
}

describe('Container App', () => {

  beforeEach(() => cy.visit('http://localhost:3000/#/'))

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
    cy.get('.btn__delete').first().click();
  });

  it('should show the error messages when the user send the form empty', () => {
    cy.get('.link__category:nth-child(2) .categories__name').click();

    cy.get('form').submit();

    cy.contains("nombre es requerido")
    cy.contains("apellido es requerido")
    cy.contains("email es requerido")
    cy.contains("region es requerido")
    cy.contains("password es requerido")

  });

  it('should fill the form and send it', () => {
    cy.get('.link__category:nth-child(2) .categories__name').click();
    cy.get('form').within(() => {
      cy.get('input[name=nombre]').type('Ifrain')
      cy.get('input[name=apellido]').type('Medina')
      cy.get('input[name=email]').type('medina.ifrain@gmail.com')
      cy.get('[type="radio"]').first().check()
      cy.get('select').select('América')
      cy.get('input[name=password]').type('123456')
    })

    cy.get('form').submit();

    cy.contains("Te registraste con éxito")

  });

}); 
