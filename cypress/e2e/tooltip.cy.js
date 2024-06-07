/// <reference types = "cypress"/>

describe("tooltip ", () =>{
    it("Validate tooltip", () =>{
        cy.visit("https://formstone.it/components/tooltip/", {timeout:180000})
        cy.contains("Left").trigger("mouseover").should('have.text', 'Left')
        cy.wait(2000)
        cy.contains("Right").trigger("mouseover").should('have.text', 'Right')
        cy.wait(2000)
        cy.contains("Top").trigger("mouseover").should('have.text', 'Top')
        cy.wait(2000)
        cy.contains("Bottom").trigger("mouseover").should('have.text', 'Bottom')
    })
})