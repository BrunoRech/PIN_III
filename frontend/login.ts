import Funct from "./func";
export default {
    createPageLogin: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Login', '');
        Funct.createInput('base', 'usuário');
        Funct.createInput('base', 'senha  ');
        Funct.createButton('base', 'l');
        Funct.createContentBlock('Cadastro', '', undefined, 'cadastro');
    }
}

