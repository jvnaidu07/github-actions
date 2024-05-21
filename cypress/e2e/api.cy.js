/// <reference types = 'cypress'/>


describe("cypress api", ()=>{
    before(function(){
        cy.fixture("example").then(function(data){
            this.data = data;
            globalThis.data=data
        })
    })
    it("", ()=>{
        cy.visit("https://www.google.com/");
        cy.get("#APjFqb").type(data.name)
        // cy.intercept("GET", "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20231207&st=env").as('waitForPageLoad')
        // cy.get("#primary-menu li a").eq(2).click({force:true})
        // cy.wait("@waitForPageLoad")
    })
})