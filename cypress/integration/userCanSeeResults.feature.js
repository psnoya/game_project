describe("User can see the results", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy, stub(window.Math, "floor").returns(0);
      },
    });
  });
});
