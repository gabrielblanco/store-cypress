class SignInPage {

    static createAccountEmailInput(){ return cy.get('#email_create') }

    static createAccountBtn(){ return cy.get('#SubmitCreate') }

    static createAccountEmailErrorMsg(){ return cy.get('#create_account_error') }

    static emailInput(){ return cy.get('#email') }

    static passwordInput(){ return cy.get('#passwd') }

    static forgotPasswordLink(){ return cy.get('.lost_password > a') }

    static signInBtn(){ return cy.get('#SubmitLogin') }

    static authenticationErrorMessage(){ return cy.get('.alert.alert-danger:nth(0) li') }

}

export default SignInPage;
