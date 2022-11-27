const { assert } = require("chai");
const { expect } = require("chai");

it('Assertion Demo', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('get').click();

    cy.get('#query-btn')
    .should('contain', 'Button')
    .and('have.class', 'query-btn')
    .and('be.visible')
    .and('be.enabled')
    .invoke('attr', 'id').should('equal', 'query-btn');

    expect(true).to.be.true
    // to.not.equal()
    // to.be.a('string')
    // to.be.true
    // to.be.false
    // to.be.null
    // to.exist
    assert.equal(4, '4', 'Not Equal');
    assert.strictEqual(4, 4);

    cy.get('#query-btn').should(($el) => {
        const text = $el.text()
        const expected = 'Button'

        expect(text).to.include(expected)
    })

    cy.get('#query-btn')
        .invoke('attr', 'id')
        .then((id) => {
            const expected = 'query-btn'

            assert.equal(expected, id)
        })
})