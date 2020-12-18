describe("Game interface", () => {
  it("successfully renders", () => {
    cy.visit("/")
    cy.contains("RPS Game")
  })
})