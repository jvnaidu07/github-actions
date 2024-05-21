class getLocator {
    getFirstMenu(index) {
        return cy.get("a[class='analystic']").eq(index)
    }
    welcomeText() {
        return cy.iframe("#singleframe").first()
    }
    findSearchBar() {
        return cy.get("input[type='text']")
    }
}
export default getLocator