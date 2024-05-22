/// <reference types = "Cypress"/>

import getLocator from "./locators";



const registrationPage = new getLocator();

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
        registrationPage.nameField().first().type("name").should('have.value', "name")
        registrationPage.addressField().type("address").should('have.value', 'address')
        registrationPage.checkcheckboxes().check();
        registrationPage.radioButtonCheckgender().first().click({force:true})
        registrationPage.dateOfBirthField().last().type("1992-06-12").should('have.value', '1992-06-12')
        registrationPage.selectCountry().select('India').should('have.value', 'India')
        registrationPage.selectCity().select('Delhi').should('have.value', 'Delhi')        
    })
});
