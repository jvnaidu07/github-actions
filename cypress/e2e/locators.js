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
    nameField() {
        return cy.get("#registration-form input", {timeout: 60000})
    }
    addressField() {
        return cy.get("#registration-form input").eq(1)
    }
    checkcheckboxes() {
        return cy.get("input[type='checkbox']")
    }
    radioButtonCheckgender() {
        return cy.get("input[type='radio']")
    }
    dateOfBirthField() {
        return cy.get("#registration-form input")
    }
    selectCountry() {
        return cy.get("select[id='country']")
    }
    selectCity() {
        return cy.get("select[id='city']")
    }


}
export default getLocator