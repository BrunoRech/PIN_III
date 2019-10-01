
function createPageLogin() {
    cleanContent();
    createContentBlock('Login', '');
    createInput('base', 'usuário');
    createInput('base', 'senha  ');
    createButton('base', 'l');
    createContentBlock('Cadastro', '', undefined, 'cadastro');
}

