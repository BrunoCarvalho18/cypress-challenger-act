class CadastrarUsuarioElements {

    linkCadastro() {
        return '[data-testid="cadastrar"]'
    }

    fieldNome() {
        return '[data-testid="nome"]'
    }

    fieldEmail() {
         return '[data-testid="email"]'
    }

    fieldSenha() {
         return '[data-testid="password"]'
    }

    buttonCadastar() {
         return '[data-testid="cadastrar"]'
    }

}

export default new CadastrarUsuarioElements()