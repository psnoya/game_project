describe("User can display game page", () => {
  it('displays interface', () => {
cy.visit("/");
  cy.get("#paper-button").should('contain', 'Paper');
  cy.get("#rock-button").should('contain', 'Rock');
  cy.get("#scissors-button").should('contain', 'Scissors');
  })
 })
  
