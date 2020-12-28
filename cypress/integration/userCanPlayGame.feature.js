describe("User can play game with a friend", () => {
      beforeEach(() => {
        cy.visit("/")
      })
      it("Player can choose Rock", () => {
        cy.get("[data-cy='rock-button']").click();
      });
    
      it("Player can choose Paper", () => {
        cy.get("[data-cy='paper-button']").click();
      });
    
      it("Player can choose Scissors", () => {
        cy.get("[data-cy='scissors-button']").click();
      });
    });
    
