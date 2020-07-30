// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add("logIn", () => { 
//     SignInPage.signIn(this.userData.validUser.email, this.userData.validUser.password)
//     cy.url().should('include', 'controller=my-account')
// })

// Cypress.Commands.add("addProdToCart", (prodId) => { 
//     const prod_details = {'id_product':'4', 'controller':'cart', 'add':'1', 'ajax':'true', 'qty':'1', 'token':'a8e2f23909ef4abc7ecf3e3286b0dac9'}
//     cy.request('POST', 'http://automationpractice.com/index.php?', prod_details)
//         .then((response) => {
//             expect(response.status).to.eq(200)
//     })
// })