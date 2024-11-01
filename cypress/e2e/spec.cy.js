Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('login to renewlife',()=>{
    it('open the site',()=>{
        cy.visit('https://www.renewlife.com/');
        cy.get('.has-submenu>.button').click();
        cy.url().should('include', '/account/login');
        cy.get('[name="customer[email]"]').type('orodriguez@pipingrock.com');
        cy.get('[name="customer[password]"]').type('PipingRock');
        cy.get('[id="send2"]').click();
        cy.get('[data-ui-id="page-title-wrapper"]').contains('My Account');
    })
})