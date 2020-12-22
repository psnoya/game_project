describe('User can choose between rock, paper and scissors', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("User chooses Paper", () => {
    cy.get("[data-cy='paper-button']").click();
  })
  it("User chooses Rock", () => {
    cy.get("[data.cy='rock-button']").click()
  })
  it("User chooses", () => {
    cy.get("[data-cy='scissors-button']").click()
  })
})
