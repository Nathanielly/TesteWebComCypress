describe('PesquisarProduto', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Pesquisar um produto', () => {
        
        cy.get('#txtDsKeyWord').type('Orquídea')
        cy.get('span#btnSearch').click()
        cy.get('div.close-button').click()
        cy.get('[href="https://www.giulianaflores.com.br/orquidea-azul/p27330/?src=DEPT"] > .title-item').click()
        cy.get('#ContentSite_lblProductDsName').should('have.text', 'Orquídea Azul');
        cy.get('.preco_prod > .precoPor_prod').should('contain', 'R$ 266,31');
        
    })
})
