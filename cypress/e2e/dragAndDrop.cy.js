/// <reference types = "cypress"/>

import storeLocators from "../locators/selectors";

const mouseActions = new storeLocators()
context("drag an drop", () => {
    const dataTransfer = new DataTransfer();
    it("drag and drop practice", () => {
        cy.viewport(500, 500)

        cy.visit("https://demo.guru99.com/test/drag_drop.html", { timeout: 120000 })
        mouseActions.triggerMouseDown().trigger('mousedown').trigger('dragstart')
        mouseActions.placeholder(1).trigger('drop', { dataTransfer })
    })
    it("drag and drop practice", () => {

        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html", { timeout: 120000 })
        mouseActions.draggable().first().trigger('dragstart', { dataTransfer })
        mouseActions.dropZone().trigger('drop', { dataTransfer })
    })
    it("drag and drop each element ", () => {

        cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html", { timeout: 120000 })
        mouseActions.draggable().each(el => {
            cy.wrap(el).trigger('dragstart', { dataTransfer });
            mouseActions.dropZone().trigger('drop', { dataTransfer })
        })
    })

    it("drag and drop practices", () => {
        cy.visit(Cypress.env("dragAnddropWebsite"))
        mouseActions.angular().trigger('dragstart')
        mouseActions.dragged().trigger('drop')
    })
   
})