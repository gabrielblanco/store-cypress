import SignInPage from '../pages/SignInPage'

describe('Sign In Page', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    })
    it('Testing email input', ()=> {
        cy.get('#email').type('gabriel.test@testing.com')
        cy.get('#passwd').type('Test123#')
        cy.get('#SubmitLogin').click()
    })
    it('Forgot Password', ()=> {
        cy.get('.lost_password > a').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=password')
    })
    // it('Login', ()=>{
    //     cy.visit({
    //         url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    //         method: 'POST',
    //         body: {
    //           email: 'MyEmail',
    //           pass: 'MyPass'
    //         }
    //     })
    // })
})