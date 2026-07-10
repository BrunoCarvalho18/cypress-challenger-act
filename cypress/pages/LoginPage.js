import LoginElements from './elements/LoginElements'


class LoginPage {

    visit() {
      cy.visit(Cypress.env('baseUrl'))
    }

    fillEmail(nome) {
        cy.get(LoginElements.fieldEmail())
          .type(nome)
    }

    fillPassword(password) {
        cy.get(LoginElements.fieldSenha())
          .type(password)
    }

    clickButtonCadastrar() {
        cy.get(LoginElements.buttonEntrar())
          .click()
    }

    enterLogin(user) {

      this.fillEmail(user.email)

      this.fillPassword(user.password)

      this.clickButtonCadastrar()
    }

}

export default new LoginPage()