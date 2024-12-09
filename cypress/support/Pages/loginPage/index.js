const elem = require('./elements').ELEMENTS

class Login {
    acessarURL() {
        cy.visit('/')
    }

    validarPageTitle() {
        cy.get(elem.pageTitle).should('be.visible')
    }

    preencherUsuario() {
        cy.get(elem.username).type('standard_user')
    }

    preencherSenha() {
        cy.get(elem.password).type('secret_sauce')
    }

    fazerLogin() {
        cy.get(elem.signup_button).contains("Login").click()
    }

    fazerLogOut() {
        cy.get(elem.menuContent).should('be.visible').click()
        cy.get(elem.logout).should('be.visible').click()
    }

}

export default new Login()