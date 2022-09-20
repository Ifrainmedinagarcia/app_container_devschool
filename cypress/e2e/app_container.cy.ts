

const addProducts = () => {
  cy.get('.card__product:nth-child(1) .btn__add').click({ multiple: true });
  cy.get('.card__product:nth-child(2) .btn__add').click({ multiple: true });
  cy.get('.card__product:nth-child(3) .btn__add').click({ multiple: true });
  cy.contains("3")
}

describe('Container App', () => {

  beforeEach(()=> {
    cy.visit("http://localhost:3000/app_container_devschool")
  })

  it('page can be open', () => {
    cy.contains("Home")
  });

  it('page should redirect to MFE1 and add three products to cart', () => {
    cy.get('.card__container:nth-child(1) .categories__name').click();
    cy.contains("Todo")
    addProducts()
  });
  
  it('should render Cart Page and delete all products', () => {
    cy.get('.card__container:nth-child(1) .categories__name').click();
    addProducts()
    cy.get('.cart').click();
    cy.get('.btn__delete').click({ multiple: true });
    cy.get('.nav_sub').click();
  });

  it('should show the success messages', () => {
    cy.get('.card__container:nth-child(1) .categories__name').click();
    addProducts()
    cy.get('.cart').click();
    cy.get('.button__cart').click();
    cy.contains("Pagaste con éxito tus productos")
  });
}); 