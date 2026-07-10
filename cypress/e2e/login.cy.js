import LoginPage from '../pages/LoginPage'

describe('Login', () => {

  it('Login successfully', () => {

    cy.fixture('users').then((users) => {

      LoginPage.visit()

      LoginPage.enterLogin({
        email: users.email,
        password: users.password
      })

    })

    cy.contains('Serverest Store')
       .should('be.visible')

  })

  it('Unsuccessful login', () => {

    cy.fixture('users').then((users) => {

      LoginPage.visit()

      LoginPage.enterLogin({
        email: users.email,
        password: users.wrongpassword
      })

    })
  
     cy.contains('Email e/ou senha inválidos')
         .should('be.visible')

  })

})