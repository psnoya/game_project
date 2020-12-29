describe("User can view the game", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  cy.get("[data-cy='paper-button']").should('contain', 'Paper')
}) 