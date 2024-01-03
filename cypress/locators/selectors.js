class storeLocators {
    trigger(index) {
        return cy.get("#products div ul li").eq(index)
    }
    triggerMouseDown() {
        return this.trigger(1)
    }
    placeholder(index) {
        return cy.get(".placeholder").eq(index)
    }
    draggable() {
        return cy.get("span[draggable='true']")
    }
    dropZone() {
        return cy.get("#mydropzone")
    }
    angular() {
        return cy.get("#angular", { timeout: 60000 })
    }
    dragged() {
        return cy.get(".dragged", { timeout: 5000 })
    }

    

}
export default storeLocators