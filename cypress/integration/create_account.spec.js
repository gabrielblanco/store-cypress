import SignInPage from '../pages/SignInPage'
import CreateAccountPage from '../pages/CreateAccountPage'

describe('Register Page', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.fixture('register.json').as('registerData')
    })
    it.skip('Validate email input', ()=> {
        SignInPage.createAccountEmailInput().type('Testing')
        SignInPage.createAccountBtn().click()
        SignInPage.createAccountEmailErrorMsg().should('be.visible')
    })
    it.only('Verify the user is able to create a new account', function() {
        SignInPage.createAnAccount(this.registerData.email)
        CreateAccountPage.fillPersonalInfo(
            this.registerData.gender,
            this.registerData.firstname,
            this.registerData.lastname,
            this.registerData.email,
            this.registerData.password,
            this.registerData.date_of_birth.day,
            this.registerData.date_of_birth.month,
            this.registerData.date_of_birth.year,
            false,
            false
        )
        CreateAccountPage.fillAddressInfo(
            this.registerData.firstname,
            this.registerData.lastname,
            this.registerData.company,
            this.registerData.address1,
            this.registerData.address2,
            this.registerData.city,
            this.registerData.state,
            this.registerData.zipcode,
            this.registerData.country,
            this.registerData.additional_info,
            this.registerData.home_phone,
            this.registerData.mobile_phone,
            this.registerData.alias
        )
        // CreateAccountPage.registerBtn.click()
    })
})