
function createPageManut() {
    cleanContent();
    createContentBlock('Manutenção de Cursos', '');
    createInput('base', 'código');
    createInput('base', 'nome');
    createInput('base', 'descrição');
    createInput('base', 'categoria');
    createInput('base', 'preço atual');
    createInput('base', 'avaliação');
    createInput('base', 'plataforma');
    createButton('base', 's');
    createContentBlock('Manutenção da API', '', undefined, 'manutAPI');
}

