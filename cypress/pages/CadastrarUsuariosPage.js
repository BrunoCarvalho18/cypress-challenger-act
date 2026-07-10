import CadastrarUsuariosElements from './elements/CadastrarUsuariosElements'

class CadastrarUsuariosPage {

    visit() {
      cy.visit(Cypress.env('baseUrl'))
    }

    clickLinkCadastrarSe() {
    cy.get(CadastrarUsuariosElements.linkCadastro())
      .click()
    }

    fillNome(nome) {
    cy.get(CadastrarUsuariosElements.fieldNome())
      .type(nome)
    }

    fillEmail(email) {
    cy.get(CadastrarUsuariosElements.fieldEmail())
      .type(email)
    }

    fillSenha(password) {
    cy.get(CadastrarUsuariosElements.fieldSenha())
      .type(password)
    }

    clickbuttonCadastrar() {
    cy.get(CadastrarUsuariosElements.buttonCadastar())
      .click()
    }

    cadastrarUsuario(user) {

      this.fillNome(user.nome)

      this.fillEmail(user.email)

      this.fillSenha(user.password)

      this.clickbuttonCadastrar()
    }
}

export default new CadastrarUsuariosPage()

