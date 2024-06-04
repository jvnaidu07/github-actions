/// <reference types = "cypress"/>


import { tableContentName } from "./gridTableObj";

describe("Validate grid table", () =>{



    const tableHeaders = 
    [
        "Name", "Project", "Priority", "Status", "Assigned To", "Due Date", "Effectiveness"
    ]

    const updateval = (titleName) => {
        cy.get("div[data-column= 'name']").contains(titleName).should('have.text', titleName);

    }



    it("grid table spec", () =>{
        cy.visit(Cypress.env("gridTable"));
        cy.get(".b-grid-header-text").should('have.length', 7).as("visible")
        cy.get("@visible").should('be.visible');
        cy.get("@visible").each(($el, index) =>{
            cy.wrap($el).should('have.text', `${tableHeaders[index]}`)
        })
        tableContentName.forEach(val =>{
            updateval(val.titleName)

        })
    })
})
