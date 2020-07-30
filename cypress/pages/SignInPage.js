class SignInPage {

    // Sign In Page Locators
    static createAccountEmailInput() { return cy.get('#email_create').clear() }
    static createAccountBtn() { return cy.get('#SubmitCreate') }
    static createAccountEmailErrorMsg() { return cy.get('#create_account_error') }
    static emailInput() { return cy.get('#email').clear() }
    static passwordInput() { return cy.get('#passwd').clear() }
    static forgotPasswordLink() { return cy.get('.lost_password > a') }
    static signInBtn() { return cy.get('#SubmitLogin') }
    static authenticationErrorMessage() { return cy.get('.alert.alert-danger:nth(0) li') }

    // Fill out the email input and navigates to a new account creation
    static createAnAccount(email) {
        this.createAccountEmailInput().type(email)
        this.createAccountBtn().click()
    }

    // Makes a sign in using the given parameters
    static signIn(email, password) {
        this.emailInput().type(email)
        this.passwordInput().type(password)
        this.signInBtn().click()
    }

}

export default SignInPage;
