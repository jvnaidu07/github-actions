/// <reference types = "Cypress"/>



describe("alerts in cypress", () => {
    beforeEach("", () => {
        cy.visit(Cypress.env("alertDemoWebsite"))
    });

    it("alert box", () => {
        cy.contains("Alert Box").click();
        cy.on("window:alert", (x) => {
            expect(x).to.contains("I am an alert box!");
        })
        cy.get("#demotwo").should('have.contain', "You clicked on OK!")

    })

    it("confirm box with Ok button", () => {
        // confirm box with Ok -> by default system will select Ok
        cy.contains("Confirm Alert Box").click();
        cy.on("window:confirm", (x) => {
            expect(x).to.contains("Confirm pop up with OK and Cancel button");
        })
        cy.get("#demo").should('contain.text', "You clicked on OK!").as("confirmcancel")
        cy.reload(true);
    });

    it("confirm box with cancel button", () => {
        cy.contains("Confirm Alert Box").click();
        cy.on("window:confirm", () => false)
        cy.get("#demo").should('contain.text', "You clicked on Cancel!")
    })

    it("Prompt box with answer Yes", () => {

        // we are capturing the prompt alert window and passing the text to the input field
        cy.window().then((win) => {

            cy.stub(win, 'prompt').returns("Yes");
        })
        cy.contains("Prompt Alert Box").click();

        cy.get("#demoone").should('contain.text', "Thanks for Liking Automation")
    })

    it("Prompt box with answer No", () => {

        // we are capturing the prompt alert window and passing the text to the input field
        cy.window().then((win) => {

            cy.stub(win, 'prompt').returns("No");
        })
        cy.contains("Prompt Alert Box").click();
        cy.on("window:prompt", (x) => {
            expect(x).to.contains("Do you like Automation ?");
        })

        cy.get("#demoone").should('contain.text', "Sad to hear it !")
    })
});

