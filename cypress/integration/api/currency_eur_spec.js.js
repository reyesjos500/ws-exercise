const list_currencies_eur = require('../../data/currencies_eur_latest.json')

describe('Test Suite Currency List with EUR as base currency', () => {

    let requestResponse

    before('request API', () => {
        cy.request('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
            .then((response) => {
                requestResponse = response
            })
    })

    it('test Status Request to API Currencies EUR', () => {
        cy.Status(requestResponse)
    })

    it('test Header Content Type JSON - API Currencies EUR ', () => {
        cy.HeaderContent(requestResponse)
    })

    it('test Body is not NULL - API Currencies EUR', () => {
        cy.BodyNotNull(requestResponse)
    })

    list_currencies_eur.forEach((currency) => {
        it(`test currency "${currency.name}" is included in Currencies List with EUR as base currency`, () => {
            expect(requestResponse.body.eur[currency.name]).exist
        })

    })

 })