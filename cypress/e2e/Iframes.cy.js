/// <reference types = 'cypress'/>

import getLocator from "./locators";


const frames = new getLocator();
describe('cypress iframes', () => {
    it("iframes", () => {
        cy.visit("https://demo.automationtesting.in/Frames.html")

        cy.getIframe().first().find("input[type='text']").type("welcome to iframes").should('have.value', 'welcome to iframes')
    });
    it("iframes", () => {
        cy.visit("https://demo.automationtesting.in/Frames.html")
        cy.frameLoaded('#singleframe')
        cy.iframe("#singleframe").first().find("input[type='text']").type("welcome to iframes").should('have.value', 'welcome to iframes')

    });
    const obj = {
        welcomeText: "welcome to iframes"
    }
    const MoreOptions1 = [{
        charts: "Charts",
        dynamicData: "Dynamic Data",
        fileDownload: "File Download",
        fileUpload: "File Upload",
        jqueryProgressBar: "JQery ProgressBar",
        loder: "Loader",
        modals: "Modals",
        progreebar: "Progress Bar"
    }]
    const MoreOptions = {
        charts: "Charts",
        dynamicData: "Dynamic Data",
        fileDownload: "File Download",
        fileUpload: "File Upload",
        jqueryProgressBar: "JQery ProgressBar",
        loder: "Loader",
        modals: "Modals",
        progreebar: "Progress Bar"
    }
    it.only("iframes", () => {
        cy.visit("https://demo.automationtesting.in/Frames.html")
        frames.getFirstMenu(0).first().contains("Single Iframe").should('have.text', 'Single Iframe ');
        frames.welcomeText().find("input[type='text']").type(`${obj.welcomeText}`).should('have.value', obj.welcomeText);
        cy.get("a[class='dropdown-toggle']").last().trigger('mouseover');
        cy.get("ul[class='dropdown-menu'] li a").should('contain.text', MoreOptions.charts, MoreOptions.dynamicData,
            MoreOptions.fileDownload, MoreOptions.fileUpload, MoreOptions.jqueryProgressBar, MoreOptions.loder,
            MoreOptions.modals, MoreOptions.progreebar);
         MoreOptions1.forEach((val, index) =>{
            cy.get("ul[class='dropdown-menu'] li a").should('contain.text', val.charts,val.dynamicData,val.fileDownload,val.fileUpload,
            val.jqueryProgressBar,val.loder,val.modals,val.progreebar)
        })       
    });
});
