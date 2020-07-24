class SignInPage {

    static emailInput(){ return cy.get('#email_create') }

    static createAccountBtn(){ return cy.get('#SubmitCreate') }

    static createAccountEmailErrorMsg(){ return cy.get('#create_account_error') }

}

export default SignInPage;
