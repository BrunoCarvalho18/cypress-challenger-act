import CadastrarUsuariosPage from '../pages/CadastrarUsuariosPage'
import { faker } from '@faker-js/faker'

describe('User Registration', () => {

  it('Should register a new user', () => {

     CadastrarUsuariosPage.visit()

     CadastrarUsuariosPage.clickLinkCadastrarSe() 

    CadastrarUsuariosPage.cadastrarUsuario({
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      senha: faker.internet.password({
          length: 12,
          memorable: false,
          pattern: /[A-Za-z0-9@#$]/
       })
    })

    cy.contains('Cadastro realizado com sucesso')
      .should('be.visible')

  })

})