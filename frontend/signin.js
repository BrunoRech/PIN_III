
function createPageSingIn() {
    cleanContent();
    createContentBlock('Cadastro - Edição', '');
    createInput('base', 'email');
    createInput('base', 'confirmar email');
    createInput('base', 'senha');
    createInput('base', 'nome');
    createInput('base', 'nascimento');
    createButton('base', 'c');
    createContentBlock('Manutenção', '', undefined, 'manut');
}

