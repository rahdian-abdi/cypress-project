/// <reference types="cypress"/>

it('Google search', () => {
    cy.visit('https://google.com');
    cy.get('.gLFyf', {timeout:5000}).type('Hello world{enter}');
    cy.contains('Gambar').click();
})