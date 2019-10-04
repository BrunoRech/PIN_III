import Funct from "./func";
export default {
    createPageSingIn: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Cadastro - Edição', '');
        Funct.createInput('base', 'email');
        Funct.createInput('base', 'confirmar email');
        Funct.createInput('base', 'senha');
        Funct.createInput('base', 'nome');
        Funct.createInput('base', 'nascimento');
        Funct.createButton('base', 'c');
        Funct.createContentBlock('Manutenção', '', undefined, 'manut');
    }
}
