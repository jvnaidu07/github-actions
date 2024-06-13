/// <reference types = "cypress"/>

describe("alert", () => {
    it("Validate alert box", () => {
        cy.viewport(1300, 700)
        cy.visit("https://demoqa.com/alerts");
        cy.get("#alertButton").click();
        cy.on("window:alert", (t) => {
            expect(t).to.contains("You clicked a button")
        })
    })
    it("Validate confirm box", () => {
        cy.viewport(1300, 700)
        cy.visit("https://demoqa.com/alerts");
        cy.get("#confirmButton").click();
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("Do you confirm action?")
        });
        cy.get("#confirmResult").should('have.text', 'You selected Ok')
    })

    it("Validate prompt box", () => {
        cy.viewport(1300, 700)
        cy.visit("https://demoqa.com/alerts");

        //we are capturing the prompt alert window and passing the text to the input field
        cy.window().then((win) => {

            cy.stub(win, 'prompt').returns("Venkat");
        })
        cy.get("#promtButton").click();
        cy.on("window:prompt", (t) => {
            expect(t).to.contains("Please enter your name")
        });
        cy.get("#promptResult").should('have.text', 'You entered Venkat')
    })
})

