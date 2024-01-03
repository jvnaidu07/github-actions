/// <reference types = "cypress"/>

import storeLocators from "../locators/selectors";

const mouseActions = new storeLocators()
context("drag an drop", () => {
    const dataTransfer = new DataTransfer();
    it("drag and drop practice", () => {
        cy.viewport(500, 500)

        cy.visit("https://demo.guru99.com/test/drag_drop.html", { timeout: 120000 })
        mouseActions.triggerMouseDown().eq(1).trigger('mousedown').trigger('dragstart')
        cy.get(".placeholder").eq(1).trigger('drop', { dataTransfer })
    })
    it("drag and drop practice", () => {

        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html", { timeout: 120000 })
        cy.get("span[draggable='true']").first().trigger('dragstart', { dataTransfer })
        cy.get("#mydropzone").trigger('drop', { dataTransfer })
    })
    it("drag and drop each element ", () => {

        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html", { timeout: 120000 })
        cy.get("span[draggable='true']").each(el => {
            cy.wrap(el).trigger('dragstart', { dataTransfer });
            cy.get("#mydropzone").trigger('drop', { dataTransfer })
        })
    })

    it("drag and drop practices", () => {
        cy.visit(Cypress.env("dragAnddropWebsite"))
        cy.get("#angular", { timeout: 60000 }).trigger('dragstart')
        cy.get(".dragged", { timeout: 5000 }).trigger('drop')
    })
})