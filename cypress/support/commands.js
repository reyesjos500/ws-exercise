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

Cypress.Commands.add('Status', (response) => {
    expect(response.status).to.eq(200)
    console.log(response.body.eur)
})

Cypress.Commands.add('HeaderContent', (response) => {
    expect(response.headers['content-type']).to.eq('application/json; charset=utf-8')
    expect(response.body).to.not.be.null
    console.log(response.body.eur)
})

Cypress.Commands.add('BodyNotNull', (response) => {
    expect(response.body).to.not.be.null
    //let res = Object.entries(response.body.eur).map(e => ({"name":e[0],"value":e[1]}))
    //cy.writeFile('cypress/data/currencies_eur_latest.json',res)
})