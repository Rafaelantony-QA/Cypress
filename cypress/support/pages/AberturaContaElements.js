class AberturaContaElements {

    clicarCookies(){
        cy.get("#onetrust-accept-btn-handler").click()
    }

    clicarBrnAbraSuaConta(){
        cy.get('button[title="Abra sua conta"]').filter(':visible').first().scrollIntoView().click({force:true})
    }

    campoNome(){
        cy.get("#nome").type("Samuel Xavier")
    }

    campoCelular(){
        cy.get("#celular").type("11958634878")
    }

    campoEmail(){
        cy.get("#email").type("teste@teste.com.br")
    }

    campoCpf(){
        cy.get("#cpf").type("560.160.655-28")
    }

    campoDataNascimento(){
        cy.get("#dataNascimento").type("21021985")
    }

    checkboxTermo(){
        cy.get('label[for="conta-digital-pf"]').click();
    }

    btnContinuar(){
        cy.get('button[title="Continuar"]').filter(':visible').first().scrollIntoView().click({force:true});
    }
}

export default new AberturaContaElements();
