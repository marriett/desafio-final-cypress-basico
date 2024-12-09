const elem = require('./elements').ELEMENTS

class HomePage {

    validarPageTitle() {
        cy.get(elem.homePageTitle).should('be.visible')
    }

    validarHeader() {
        cy.get(elem.headerTitle).should('have.text', 'Products')
    }

    adicionarProdutoAoCarrinho() {
        cy.get(elem.addProduct).should('be.visible').click()
        cy.get(elem.kartCount).should('be.visible')
    }

    validarBadgeCarrinho() {
        cy.get(elem.kartCount).should('have.text', "1")
    }
}

export default new HomePage()