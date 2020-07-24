class CreateAccountPage {

    // emailInput(){ return cy.get('#email_create') }

    maleGenderRadioBtn(){ return cy.get('#id_gender1') }

    customerFirstName(){ return cy.get('#customer_firstname') }

    customerLastName(){ 
        cy.get('#customer_lastname').clear()
        return cy.get('#customer_lastname') 
    }

    emailInput(){ return cy.get('#email') }

    passwordInput(){ return cy.get('#passwd') }

    newsletterChkbox(){ return cy.get('#newsletter') }

    offersChkbox(){ return cy.get('#optin') }

    firsttNameInput(){ return cy.get('#firstname') }

    lastNameInput(){ return cy.get('#lastname') }

    companyInput(){ return cy.get('#company') }

    addressInput(){ return cy.get('#address1') }

    secondAddressInput(){ return cy.get('#address2') }

    cityInput(){ return cy.get('#city') }

    stateDrp(){ return cy.get('#id_state') }

    zipcodeInput(){ return cy.get('#postcode') }

    countryDrp(){ return cy.get('#id_country') }

    additionalInfo(){ return cy.get('#other') }

    phoneInput(){ return cy.get('#phone') }

    mobilePhoneInput(){ return cy.get('#phone_mobile') }

    aliasInput(){ return cy.get('#alias') }

    setBirthDay(day, month, year){

    }
    
}

export default CreateAccountPage;