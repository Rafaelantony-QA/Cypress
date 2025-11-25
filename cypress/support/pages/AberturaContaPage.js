import AberturaContaElements from './AberturaContaElements.js'

class AberturaContaPage {

    preencherFormularioAberturaDeConta(){

        AberturaContaElements.clicarCookies();
        AberturaContaElements.clicarBrnAbraSuaConta()
        AberturaContaElements.campoNome()
        AberturaContaElements.campoCelular()
        AberturaContaElements.campoEmail()
        AberturaContaElements.campoCpf()
        AberturaContaElements.campoDataNascimento()
        AberturaContaElements.checkboxTermo()
        AberturaContaElements.btnContinuar()
    }
}

export default new AberturaContaPage();
