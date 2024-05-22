class storeLocators {
    trigger(index) {
        return cy.get("#products div ul li", {timeout: 60000}).eq(index)
    }
    triggerMouseDown() {
        return this.trigger(1)
    }
    placeholder(index) {
        return cy.get(".placeholder", {timeout: 60000}).eq(index)
    }
    draggable() {
        return cy.get("span[draggable='true']", {timeout: 60000})
    }
    dropZone() {
        return cy.get("#mydropzone", {timeout: 60000})
    }
    angular() {
        return cy.get("#angular", { timeout: 60000 })
    }
    dragged() {
        return cy.get(".dragged", { timeout: 5000 })
    }

    

}
export default storeLocators