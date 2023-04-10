describe('Cypress', () => {
  it('opens the app and clicks on a hotel', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').first().click();
    cy.location('pathname').should('include', 'hotel');
  });
  it('navigates to the form to add a review', () => {
    cy.get('[data-cy=addReview]').click();
    cy.location('pathname').should('include', 'new');
  });
  it('fills in and submits the form', () => {
    cy.get('form').within(() => {
      cy.get('input[name=title]').type('Is a review');
      cy.get('input[name=description]').type('Is a test review by Cypress');
      cy.get('input[name=rating]').type(4);
      cy.get('button').click();
    });
  });
  it('and verifies fi the review is added', () => {
    cy.wait(600);
    cy.get('h3').contains('Test review');
    cy.get('div').contains('Is a test review by Cypress');
  });
});


