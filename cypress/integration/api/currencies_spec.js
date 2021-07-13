const list_currencies = require('../../data/currencies_latest.json')

describe('Test Suite Currencies API', () => {

    let requestResponse

    before('request API Currencies', () => {
        cy.request('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
            .then((response) => {
                requestResponse = response
            })
    })

    it('test Status Request to API Currencies', () => {
        cy.Status(requestResponse)
    })

    it('test Header Content Type JSON - API Currencies ', () => {
        cy.HeaderContent(requestResponse)
    })

    it('test Body is not NULL - API Currencies ', () => {
        cy.BodyNotNull(requestResponse)
    })

    list_currencies.forEach((currency) => {
        it(`test currency "${currency.name}" is included in list of Currencies`, () => {
            expect(requestResponse.body[currency.name]).to.contain(currency.value)
        })

    })

})