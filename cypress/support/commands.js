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
Cypress.Commands.add('kasirlogin', (useremail,userpassw) => {
    cy.get('#email').clear().type(useremail)
    cy.get('#password').clear().type(userpassw)
    cy.get('.chakra-button').click()
})

Cypress.Commands.add('kasirKetik', (elemen,value) => {
    cy.get(elemen)
    .should('be.visible')
    .clear()
    .type(value)
})

Cypress.Commands.add('kasirVerify', (elemen,textnya) => {
    cy.get(elemen)
    .should('contain.text',textnya)
})

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