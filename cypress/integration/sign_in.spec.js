import SignInPage from '../pages/SignInPage'

describe('Sign In Page', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      cy.fixture('user.json').as('userData')
    })
    it('Forgot Password', ()=> {
        SignInPage.forgotPasswordLink().click()
        cy.url().should('include', 'controller=password')
    })
    it('Invalid Authentication', function() {
        SignInPage.emailInput().type(this.userData.invalidUser.email)
        SignInPage.passwordInput().type(this.userData.invalidUser.password)
        SignInPage.signInBtn().click()
        SignInPage.authenticationErrorMessage().then(($el)=>{
            var text = $el.text()
            expect(text).to.equal("Authentication failed.")
        })
    })
    it('Valid SignIn', function() {
        console.log(this.userData.validUser.email)
        SignInPage.emailInput().type(this.userData.validUser.email)
        SignInPage.passwordInput().type(this.userData.validUser.password)
        SignInPage.signInBtn().click()
        cy.url().should('include', 'controller=my-account')
    })
})