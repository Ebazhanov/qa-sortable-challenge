context('Aliasing', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('.as() - alias a DOM element for later use', () => {
        cy.get('.as-table').find('tbody>tr')
    });

    it('should run test sample', () => {
        console.log('testing');
    })
});
