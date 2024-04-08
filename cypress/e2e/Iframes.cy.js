/// <reference types = 'cypress'/>

describe('cypress iframes', ()=>{
    it("iframes",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
      
        cy.getIframe().first().find("input[type='text']").type("welcome to iframes").should('have.value', 'welcome to iframes')
    });
    it.only("iframes",()=>{
        cy.visit("https://demo.automationtesting.in/Frames.html")
        cy.frameLoaded('#singleframe')
        cy.iframe("#singleframe").first().find("input[type='text']").type("welcome to iframes").should('have.value', 'welcome to iframes')
        
    });
});
