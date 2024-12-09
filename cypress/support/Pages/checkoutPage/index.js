const elem = require('./elements').ELEMENTS

class CheckoutPage {
    validarTelaCheckout() {
        cy.get(elem.checkoutButton).should('be.visible').click()
        cy.get(elem.headerTitle).should('have.text', "Checkout: Your Information")
    }

    fazerCheckout(firstName, lastName, zipCode) {
        cy.get(elem.userFirstName).type(firstName)
        cy.get(elem.userLastName).type(lastName)
        cy.get(elem.userPostalcode).type(zipCode)
        cy.get(elem.submitButton).should('be.visible').click()
        cy.get(elem.headerTitle).should('have.text', "Checkout: Overview")
    }

    concluirCheckout() {
        cy.get(elem.kartItems).should('be.visible')
        cy.get(elem.finishButton).should('be.visible').click()
    }

    validarCheckoutRealizado() {
        cy.get(elem.headerTitle).should('have.text', "Checkout: Complete!")
        cy.get(elem.successMessage).should('have.text', "Thank you for your order!")
    }
}

export default new CheckoutPage()