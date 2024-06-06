/// <reference types = "cypress"/>


import { airlineGridTable, airlineGridtable } from "./airline";

describe("Validate grid table", () => {

    const updateval = (airline) => {
        cy.get("div[data-column='airline']").should('have.text', "AirlineSASLufthansaSASNorwegianAir FranceSASNorwegianLufthansaLufthansaAir FranceSASNorwegianLufthansa");

    }



    it("grid table spec", () => {
        cy.visit("https://bryntum.com/products/grid/examples/tree/")
        airlineGridTable.forEach(val => {
            updateval(val.airlne)
        })

    })


    var data = [];
    it.only("grid table spec", () => {
        cy.visit("https://bryntum.com/products/grid/examples/responsive/")
        cy.get("div[data-column='surName']").then($el =>{
            const getText = $el.text().toString()
            const obj = JSON.stringify(getText)
            const element = data.push(obj)
            cy.log(obj);

        })

    })

})
