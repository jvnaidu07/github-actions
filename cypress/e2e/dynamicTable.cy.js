/// <reference types = "cypress"/>

const dynamicTable = 
[
    "Company", "Contact", "Country", "Tag", "Description"
]


const dynamicTable1 = 
[
    {company: "Company", contact: "Contact", country: "Country", tag:"Tag", desc: "Description"}
]

const dynamicTable2 = 
[
    {company: "Alfreds Futterkiste",	        contact: "Maria Anders",	                country: "Germany"},
    {company: "Centro comercial Moctezuma",	    contact: "Francisco Chang",	                country: "Mexico"},
    {company: "Ernst Handel",	                contact: "Roland Mendel",	                country: "Austria"},
    {company: "Island Trading",	                contact: "Helen Bennett",	                country: "UK"},
    {company: "Laughing Bacchus Winecellars", 	contact: "Yoshi Tannamuri",	                country: "Canada"},
    {company: "Magazzini Alimentari Riuniti",	contact: "Giovanni Rovelli",	            country: "Italy"}

]

const getResults= (company, contact, country, tag, desc) =>{
    cy.get(".ws-table-all tbody tr th", {timeout: 60000}).contains(company).should('contain.text', company )
    cy.get(".ws-table-all tbody tr th", {timeout: 60000}).contains(contact).should('contain.text', contact )
    cy.get(".ws-table-all tbody tr th", {timeout: 60000}).contains(country).should('contain.text', country )
    cy.get(".ws-table-all tbody tr th", {timeout: 60000}).contains(tag).should('contain.text', tag )
    cy.get(".ws-table-all tbody tr th", {timeout: 60000}).contains(desc).should('contain.text', desc )

}


const getResults1= (company, contact, country) =>{
    cy.get(".ws-table-all tbody tr td", {timeout: 60000}).contains(company).should('contain.text', company )
    cy.get(".ws-table-all tbody tr td", {timeout: 60000}).contains(contact).should('contain.text', contact )
    cy.get(".ws-table-all tbody tr td", {timeout: 60000}).contains(country).should('contain.text', country )

}

describe("dynamic table", () =>{
    it("Validate dynamic table", () =>{
        cy.visit("https://www.w3schools.com/html/html_tables.asp", {timeout: 100000});
        cy.get(".ws-table-all tbody tr th", {timeout: 60000}).each(($el, index) =>{
            cy.wrap($el).should('have.text',`${dynamicTable[index]}`)
        })
    })


    it("Validate dynamic table", () =>{
        cy.visit("https://www.w3schools.com/html/html_tables.asp", {timeout: 100000});
        dynamicTable1.forEach(el =>{
            getResults(el.company, el.contact, el.country, el.tag, el.desc)
        })
    })

    it.only("Validate dynamic table", () =>{
        cy.visit("https://www.w3schools.com/html/html_tables.asp", {timeout: 120000});
        dynamicTable2.forEach(el =>{
            getResults1(el.company, el.contact, el.country)
        })
    })
})

