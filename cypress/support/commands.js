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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (usuario, password) => {
    cy.visit('http://127.0.0.1:5500/login.html')

    cy.get('[name="uname"]').type(usuario)
    cy.get('[name="psw"]').type(password)
    //cy.get('[type="submit"]').click()

    cy.get('h2').should('be.visible')
    cy.get('h2').contains('Login Form')


// função copia texto
    //cy.get('h2').then(($el) => {
    //  const Texto = $el.text()
    //cy.get('[name="uname"]').type(Texto)
    // })
})