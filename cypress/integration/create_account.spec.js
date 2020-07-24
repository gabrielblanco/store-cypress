import CreateAccountPage from '../pages/CreateAccountPage'

describe('Register Page', () => {
    before(function(){
        cy.fixture('register.json').as('registerData')
    })
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    })
    it('Testing email input', ()=> {
        cy.get('#email_create').type('Testing')
        cy.get('#SubmitCreate').click()
        // cy.get('#SubmitCreate').should('have.css', 'border', '1px solid #f13340')
        cy.get('#create_account_error').should('be.visible')
    })
    it('Create new account', function() {
        const createAccountPage = new CreateAccountPage()
        const data = registerData[0]

        cy.get('#email_create').type(this.data.email)
        cy.get('#SubmitCreate').click()
        createAccountPage.maleGenderRadioBtn().click()
        createAccountPage.customerFirstName().type(this.data.firstname)
        createAccountPage.customerLastName().type(this.registerData.lastname)
        createAccountPage.passwordInput().type(this.registerData.password)
        createAccountPage.addressInput().type(this.registerData.address)
        createAccountPage.cityInput().type(this.registerData.city)
        createAccountPage.zipcodeInput().type(this.registerData.zipcode)
        createAccountPage.countryDrp().select(this.registerData.country)
        createAccountPage.stateDrp().select(this.registerData.state)
        createAccountPage.mobilePhoneInput().type(this.registerData.mobile_phone)
        createAccountPage.aliasInput().type(this.registerData.alias)
        // cy.get('#submitAccount').click()

        // cy.get('#email_create').type('gabriel.test@testing.com')
        // createAccountPage.maleGenderRadioBtn().click()
        // createAccountPage.customerFirstName().type('Gabriel')
        // createAccountPage.customerLastName().type('Duran')
        // createAccountPage.passwordInput().type('m3t3$t1ng')
        // createAccountPage.addressInput().type('San Carlos')
        // createAccountPage.cityInput().type('Quesada')
        // createAccountPage.zipcodeInput().type('21001')
        // createAccountPage.countryDrp().select('United States')
        // createAccountPage.stateDrp().select('Florida')
        // createAccountPage.mobilePhoneInput().type('88888888')
        // createAccountPage.aliasInput().type('Delivery Area')
    })
})