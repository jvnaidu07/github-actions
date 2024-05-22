/// <reference types = "Cypress"/>

describe("perform mouse hover actions", () =>{
    it("",() =>{
        cy.visit(Cypress.env("mouseHover"));
        cy.contains("Mouse Hover DropDown").realHover();
        cy.contains("Link 1").click({force:true});
        cy.get(".modal-content").then(t =>{
            expect(t).to.contain("You click on Dropdown hover Option")
        })
    })
})
