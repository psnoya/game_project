describe("User can see the results", () => {
  beforeEach(() => {
    cy.visit("/")
  })
})

it("is set to 0 at the start", () => {
  cy.get("[data-cy='results']").should("contain", "0 to 0")
})