import AberturaContaPage from '../../support/pages/AberturaContaPage';

describe('Abertura de conta', () => {

    it('preencher formulario de abertura de conta PF', () => {
        cy.visit('https://www.inter.co')
        AberturaContaPage.preencherFormularioAberturaDeConta()
    })

})
