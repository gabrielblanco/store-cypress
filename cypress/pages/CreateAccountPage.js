class CreateAccountPage {

    // Personal Information Locators

    static maleGenderRadioBtn(){ return cy.get('#id_gender1') }

    static femaleGenderRadioBtn(){ return cy.get('#id_gender2') }

    static customerFirstName(){ return cy.get('#customer_firstname').clear() }

    static customerLastName(){ return cy.get('#customer_lastname').clear() }

    static emailInput(){ return cy.get('#email').clear() }

    static passwordInput(){ return cy.get('#passwd').clear() }

    static setBirthDay(day, month, year){ 
        cy.get('#days').select(day)
        cy.get('#months').select(month)
        cy.get('#years').select(year)
    }

    static newsletterChkbox(){ return cy.get('#newsletter') }

    static offersChkbox(){ return cy.get('#optin') }

    // Address Locators

    static firsttNameInput(){ return cy.get('#firstname').clear() }

    static lastNameInput(){ return cy.get('#lastname').clear() }

    static companyInput(){ return cy.get('#company').clear() }

    static addressInput(){ return cy.get('#address1').clear() }

    static secondAddressInput(){ return cy.get('#address2').clear() }

    static cityInput(){ return cy.get('#city').clear() }

    static stateDrp(){ return cy.get('#id_state') }

    static zipcodeInput(){ return cy.get('#postcode').clear() }

    static countryDrp(){ return cy.get('#id_country') }

    static additionalInfo(){ return cy.get('#other').clear() }

    static phoneInput(){ return cy.get('#phone').clear() }

    static mobilePhoneInput(){ return cy.get('#phone_mobile').clear() }

    static aliasInput(){ return cy.get('#alias').clear() }

    static registerBtn(){ return cy.get('#submitAccount') }

    // Fills out the Personal information form
    static fillPersonalInfo(gender, firstname, lastname, email, password, day, month, year, newsletter, offers) {
        if(gender == "female"){
            this.femaleGenderRadioBtn().click()
        } else {
            this.maleGenderRadioBtn().click()
        }
        this.customerFirstName().type(firstname)
        this.customerLastName().type(lastname)
        this.emailInput().type(email)
        this.passwordInput().type(password)
        this.setBirthDay(day, month, year)
        if(newsletter) { this.newsletterChkbox().click() }
        if(offers) { this.offersChkbox().click() }
    }

    // Fills out the address information form
    static fillAddressInfo(firstname, lastname, company, address1, address2, city, state, zipcode, country, additional_info, home_phone, mobile_phone, alias){
        this.firsttNameInput().type(firstname)
        this.lastNameInput().type(lastname)
        this.companyInput().type(company)
        this.addressInput().type(address1)
        this.secondAddressInput().type(address2)
        this.cityInput().type(city)
        this.zipcodeInput().type(zipcode)
        this.countryDrp().select(country)
        this.stateDrp().select(state)
        this.additionalInfo().type(additional_info)
        this.phoneInput().type(home_phone)
        this.mobilePhoneInput().type(mobile_phone)
        this.aliasInput().type(alias)
    }

    static fillNewAccountInfo(){
        // registerBtn().click()
    }

    // It returns a randome gender || male - female
    static getRandomGender(){
        let gender = ((Math.floor(Math.random() * 2)) == 1) ? "male" : "female"
        return gender
    }

    static getRandomName() {

    }

    static getRandomLastname() {
        
    }

    // It generates a random email address || email@test.com
    static getRandomEmail() {
        let email = Math.random().toString(36).substring(2, 10)
        return `${email}@test.com`
    }

    // It generates a random string for password
    static getRandomPassword() {
        return Math.random().toString(36).substring(2, 15)
    }

    // It generates a random number for day || 1 - 31
    static getRandomDay() {
        return Math.floor(Math.random() * (32 - 1) + 1)
    }

    // It generates a random number for month || 1 - 12
    static getRandomMonth() {
        return Math.floor(Math.random() * (13 - 1) + 1)
    }

    // It generates a random number for year || 1900 - 2020
    static getRandomYear() {
        return Math.floor(Math.random() * (2020 - 1900) + 1900)
    }
    
}

export default CreateAccountPage;