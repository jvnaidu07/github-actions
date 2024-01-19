/// <reference types = 'cypress'/>

describe('cypress iframes', ()=>{
    it("iframes",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
        cy.get("#singleframe", {timeout: 30000}).then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')            
        })
        cy.get("@iframe").first().find("input[type='text']").type("welcome to iframes").should('have.value', 'welcome to iframes')
    });
});