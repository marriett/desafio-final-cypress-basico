// // <reference types = "Cypress" />

// import Login from '../support/Pages/loginPage/index.js'
// import HomePage from '../support/Pages/homePage/index.js'
// import KartPage from '../support/Pages/kartPage/index.js'
// import CheckoutPage from '../support/Pages/checkoutPage/index.js'

// it('Validar Login', () => {
//     Login.acessarURL()
//     Login.validarPageTitle()
//     Login.preencherUsuario()
//     Login.preencherSenha()
//     Login.fazerLogin()

//     HomePage.validarPageTitle()
//     HomePage.validarHeader()
// })

// beforeEach(() => {
//     Login.acessarURL()
//     Login.preencherUsuario()
//     Login.preencherSenha()
//     Login.fazerLogin()
// })

// it('Adicionar produto ao carrinho', () =>{
//     HomePage.adicionarProdutoAoCarrinho()
// })

// it('Validar carrinho com itens', () =>{
//     HomePage.adicionarProdutoAoCarrinho()
//     KartPage.acessarCarrinho()
//     KartPage.validarHeader()
//     KartPage.verificarCarrinhoComItens()
// })

// it('Validar checkout', () => {
//     HomePage.adicionarProdutoAoCarrinho()
//     KartPage.acessarCarrinho()
//     CheckoutPage.telaCheckout()
//     CheckoutPage.fazerCheckout()
//     CheckoutPage.concluirCheckout()
// })


// it('Validar Logout', () => {
//     Login.fazerLogOut()
//     Login.validarPageTitle()
// })




// <reference types = "Cypress" />

import Login from '../support/Pages/loginPage/index.js'
import HomePage from '../support/Pages/homePage/index.js'
import KartPage from '../support/Pages/kartPage/index.js'
import CheckoutPage from '../support/Pages/checkoutPage/index.js'
import checkoutPage from '../support/Pages/checkoutPage/index.js'


describe('Validar Login', () => {
    beforeEach(() => {
        Login.acessarURL()
    })

    it('Acessar página com sucesso', () => {
        Login.acessarURL()
        Login.validarPageTitle()
    })

    it('Realizar login bem sucedido', () => {
        Login.preencherUsuario()
        Login.preencherSenha()
        Login.fazerLogin()
    
        HomePage.validarPageTitle()
        HomePage.validarHeader()
    })
})


describe('Validar carrinho', () => {
    beforeEach(() => {
        Login.acessarURL()
        Login.preencherUsuario()
        Login.preencherSenha()
        Login.fazerLogin()
    })

    it('Adicionar produto ao carrinho', () =>{
        HomePage.adicionarProdutoAoCarrinho()
        HomePage.validarBadgeCarrinho()
    })
    
    it('Verificar carrinho com itens', () =>{
        HomePage.adicionarProdutoAoCarrinho()
        KartPage.acessarCarrinho()
        KartPage.validarHeader()
        KartPage.verificarCarrinhoComItens()
    })
})

describe('Validar checkout', () => {
    beforeEach(() => {
        Login.acessarURL()
        Login.preencherUsuario()
        Login.preencherSenha()
        Login.fazerLogin()
        HomePage.adicionarProdutoAoCarrinho()
        KartPage.acessarCarrinho()
    })

    it('Validar tela de checkout', () => {
        CheckoutPage.validarTelaCheckout()
    })

    it('Concluir checkout com sucesso', () => {
        CheckoutPage.validarTelaCheckout()
        CheckoutPage.fazerCheckout()
        CheckoutPage.concluirCheckout()
        CheckoutPage.validarCheckoutRealizado()
    })
})


describe('Validar Logout', () => {
    beforeEach(() => {
        Login.acessarURL()
        Login.preencherUsuario()
        Login.preencherSenha()
        Login.fazerLogin()
    })

    it('Realizar Logout com sucesso', () => {
        Login.fazerLogOut()
        Login.validarPageTitle()
    })
})



