import SignInPage from '../pages/SignInPage'

describe('Sign In Page', () => {
    beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
      cy.fixture('user.json').as('userData')
    })
    it('Verify the forgot password hyperlink', ()=> {
        SignInPage.forgotPasswordLink().click()
        cy.url().should('include', 'controller=password')
    })
    it('Verify error message is displayed when invalid authentication', function() {
        SignInPage.signIn(this.userData.invalidUser.email, this.userData.invalidUser.password)
        SignInPage.authenticationErrorMessage().then(($el)=>{
            var text = $el.text()
            expect(text).to.equal("Authentication failed.")
        })
    })
    it('Verify the user is able to sign into the application with valid credentials', function() {
        SignInPage.signIn(this.userData.validUser.email, this.userData.validUser.password)
        cy.url().should('include', 'controller=my-account')
    })
    it('Verify the Sign In functionality - API', function() {
        const login_data = {"email": this.userData.validUser.email, "passwd" : this.userData.validUser.password}
        cy.request('POST', 'http://automationpractice.com/index.php?controller=authentication&back=my-account', login_data)
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})