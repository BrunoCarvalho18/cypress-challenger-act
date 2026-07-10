class LoginElements {

    fieldEmail() {
         return '[data-testid="email"]'
    }

    fieldSenha() {
         return '[data-testid="senha"]'
    }

    buttonEntrar() { 
        return '[data-testid="entrar"]'
    }

}

export default new LoginElements()