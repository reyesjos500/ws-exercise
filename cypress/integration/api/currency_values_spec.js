const expected_currency_values = require('../../data/expected_currency_values.json')
const addContext = require('mochawesome/addContext')

describe('Test Suite - Get Currency Values', () => {

    expected_currency_values.forEach((curr) => {

        it(`${curr.testType} Test - Get current value for EUR to ${curr.currency}`, () => {
            let value = null
            cy.request({
                url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/${curr.currency}.json`,
                failOnStatusCode: false
            })
                .then((response) => {
                    expect(response.status).to.eq(curr.status)
                    if (curr.testType == "Positive") {
                        value = response.body
                        expect(response.body).to.not.be.null
                    }
                })

            Cypress.on('test:after:run', (test) => {
                if (test.state === 'passed') {
                    addContext({ test }, {
                        title: 'Current Values for EUR',
                        value: value
                    })
                }
            })

        })

    })

})