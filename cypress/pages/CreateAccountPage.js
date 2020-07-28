class CreateAccountPage {

    static maleGenderRadioBtn(){ return cy.get('#id_gender1') }

    static customerFirstName(){ return cy.get('#customer_firstname') }

    static customerLastName(){ return cy.get('#customer_lastname') }

    static emailInput(){ return cy.get('#email') }

    static passwordInput(){ return cy.get('#passwd') }

    static setBirthDay(day, month, year){ }

    static newsletterChkbox(){ return cy.get('#newsletter') }

    static offersChkbox(){ return cy.get('#optin') }

    static firsttNameInput(){ return cy.get('#firstname') }

    static lastNameInput(){ return cy.get('#lastname') }

    static companyInput(){ return cy.get('#company') }

    static addressInput(){ return cy.get('#address1') }

    static secondAddressInput(){ return cy.get('#address2') }

    static cityInput(){ return cy.get('#city') }

    static stateDrp(){ return cy.get('#id_state') }

    static zipcodeInput(){ return cy.get('#postcode') }

    static countryDrp(){ return cy.get('#id_country') }

    static additionalInfo(){ return cy.get('#other') }

    static phoneInput(){ return cy.get('#phone') }

    static mobilePhoneInput(){ return cy.get('#phone_mobile') }

    static aliasInput(){ return cy.get('#alias') }

    static registerBtn(){ return cy.get('#submitAccount') }
    
}

export default CreateAccountPage;