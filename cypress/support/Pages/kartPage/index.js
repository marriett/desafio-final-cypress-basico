const elem = require('./elements').ELEMENTS

class KartPage {

    acessarCarrinho() {
        cy.get(elem.kart).should('be.visible').click()
    }

    validarHeader() {
        cy.get(elem.headerTitle).should('have.text', 'Your Cart')
    }

    verificarCarrinhoComItens() {
        cy.get(elem.kartCount).should('be.visible')
        cy.get(elem.kartCount)
        .then($kartCount => {
            if (cy.wrap($kartCount).should('have.text', '1')) {
                cy.get(elem.kartItem).should('be.visible')
            }
        })
    }
}

export default new KartPage()