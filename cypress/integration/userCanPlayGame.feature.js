describe("Computer selects scissors", () => {
      beforeEach(() => {
        cy.visit("/", {
          onBeforeLoad: winner => {
            cy.stub(winner.Math, 'floor').returns(0)
          }
        })
      })

      it('user selects paper = game is Lost', () => {
        cy.get("[data-cy='paper-button']").click()
        cy.get("[data.cy='result']").should("contain", "You have Lost! What a shame!")
      })
      it('user selects scissors = game is Tied', () => {
        cy.get("[data-cy='scissors-button']").click()
        cy.get("[data-cy='results']").should("contain", "DRAW!")
      })
      it('user selects rock = game is Won', () => {
        cy.get("[data-cy='rock-button']").click()
        cy.get("[data-cy='results']").should("contain", "CONGRATULATIONS! You won!")
      })
    })
    describe("Computer selects paper", () => {
      beforeEach(() => {
        cy.visit("/", {
          onBeforeLoad: winner => {
            cy.stub(winner.Math, 'floor').returns(1)
          }
        })
        it('user selects paper = game is Tied', () => {
          cy.get("[data-cy='paper-button']").click()
          cy.get("[data-cy='results']").should("contain", "DRAW!")
        })
        it('user selects scissors = game is Won', () => {
          cy.get("[data-cy='scissors-button']").click()
          cy.get("[data-cy='results']").should("contain", "CONGRATULATIONS! You won!")
        })
        it('user selects rock = game is Lost', () => {
          cy.get("[data-cy='rock-button']").click()
          cy.get("[data-cy='results']").should("contain", "You have Lost! What a shame!")
        })
      })
      describe("Computer selects rock", () => {
        beforeEach(() => {
          cy.visit("/", {
            onBeforeLoad: winner => {
              cy.stub(winner.Math, 'floor').returns(2)
            }
          })
          it('user selects paper = game is Won', () => {
            cy.get("[data-cy='paper-button']").click()
            cy.get("[data-cy='results']").should("contain", "CONGRATULATIONS! You won!")
         })
         it('user selects scissors = game is Lost', () => {
           cy.get("[data-cy='scissors-button']").click()
           cy.get("[data-cy='results']").should("contain", "You have Lost! What a shame!")
         })
         it('user selects rock = game is Tied', () => {
           cy.get("[data-cy='rock-button']").click()
           cy.get("[data-cy='results']").should("contain", "DRAW!")
         })
        })
      })
    })