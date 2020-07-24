import SignInPage from '../pages/SignInPage'
import CreateAccountPage from '../pages/CreateAccountPage'

describe('Register Page', () => {
    before(function(){
        cy.fixture('register.json').as('registerData')
    })
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    })
    it.skip('Testing email input', ()=> {
        SignInPage.emailInput().type('Testing')
        SignInPage.createAccountBtn().click()
        // SignInPage.emailInput().should('have.css', 'border', '1px solid #f13340')
        SignInPage.createAccountEmailErrorMsg().should('be.visible')
    })
    it('Create new account', function() {
        SignInPage.emailInput().type(this.registerData.email)
        SignInPage.createAccountBtn().click()
        CreateAccountPage.maleGenderRadioBtn().click()
        CreateAccountPage.customerFirstName().type(this.registerData.firstname)
        CreateAccountPage.customerLastName().type(this.registerData.lastname)
        CreateAccountPage.passwordInput().type(this.registerData.password)
        CreateAccountPage.addressInput().type(this.registerData.address)
        CreateAccountPage.cityInput().type(this.registerData.city)
        CreateAccountPage.zipcodeInput().type(this.registerData.zipcode)
        CreateAccountPage.countryDrp().select(this.registerData.country)
        CreateAccountPage.stateDrp().select(this.registerData.state)
        CreateAccountPage.mobilePhoneInput().type(this.registerData.mobile_phone)
        CreateAccountPage.aliasInput().type(this.registerData.alias)
        // CreateAccountPage.registerBtn().click()
    })
})