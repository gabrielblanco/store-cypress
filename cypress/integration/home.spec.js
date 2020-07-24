/// <reference types="cypress" />

// const { contains } = require("cypress/types/jquery")

context('Home Page', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php')
    })
    it('Search for shoes', ()=> {
        cy.get('#search_query_top').type('Shoes{enter}')
        cy.get('#selectProductSort').select('In stock')
        // cy.get('.right-block .price').contains('$50')
        cy.get('.right-block').each(($el, $index, $list)=>{

            const productPrice = $el.find('.price').text()
            // const productPrice = parseFloat($el.find('.price').text().replace('$', ''))

            // if(productPrice <= 28 ) {
            //     // cy.log(productPrice)
            //     $el.find('.ajax_add_to_cart_button').click()
            //     cy.pause()
            //     // $el.find('.continue').click()
            // }

            if(productPrice.includes('30.50')) {
                cy.log(productPrice)
                $el.find('.ajax_add_to_cart_button').should('be.visible').click()
                cy.pause()
                // $el.find('.continue').click()
            }
        })
    })
})