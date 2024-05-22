/// <reference types = "Cypress"/>

describe("perform mouse hover actions", () => {
    it("", () => {
        cy.visit(Cypress.env("mouseHover"));
        cy.contains("Mouse Hover DropDown").realHover;
        cy.contains("Link 1").click({ force: true });
        cy.get(".modal-content").then(t => {
            expect(t).to.contain("You click on Dropdown hover Option")
        })
    });

    it("registration form", () => {
        cy.visit("https://stqatools.com/demo/Register.php");
        cy.get("#registration-form input", {timeout: 60000}).first().type("name").should('have.value', "name")
        cy.get("#registration-form input").eq(1).type("address").should('have.value', 'address')
        cy.get("input[type='checkbox']").check();
        cy.get("input[type='radio']").first().click({force:true})
        cy.get("#registration-form input").last().type("1992-06-12").should('have.value', '1992-06-12')
        cy.get("select[id='country']").select('India').should('have.value', 'India')
        cy.get("select[id='city']").select('Delhi').should('have.value', 'Delhi')        

    })
});
