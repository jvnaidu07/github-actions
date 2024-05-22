/// <reference types = "cypress"/>

import getLocator from "./locators"

const registrationForm = new getLocator();
context("registration form details", () =>{



    Cypress.Commands.add("registrationFormdetails", () =>{

        registrationForm.nameField().first().type("name").should('have.value', "name")
        registrationForm.addressField().type("address").should('have.value', 'address')
        registrationForm.checkcheckboxes().check();
        registrationForm.radioButtonCheckgender().first().click({force:true})
        registrationForm.dateOfBirthField().last().type("1992-06-12").should('have.value', '1992-06-12')
        registrationForm.selectCountry().select('India').should('have.value', 'India')
        registrationForm.selectCity().select('Delhi').should('have.value', 'Delhi') 

    })

    it("registration form", () => {
        
        cy.visit("https://stqatools.com/demo/Register.php");
        cy.registrationFormdetails()
               
    
    })

})
