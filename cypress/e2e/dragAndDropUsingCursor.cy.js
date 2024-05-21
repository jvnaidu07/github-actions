/// <reference types = "cypress"/>

describe("drag and drop", ()=>{
    it("move items from one place to another place", ()=>{
        const dataTransfer = new DataTransfer();
        cy.visit(Cypress.env("dragAndDrop"))
        cy.get("#products div ul li").should('have.length', 8);
        cy.get("#products div ul li").eq(4).trigger('dragstart', {dataTransfer})
        cy.get(".ui-widget-content ol li").first().trigger('dragend', {dataTransfer})
    })
})