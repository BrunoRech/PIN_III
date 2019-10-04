import Funct from "./func";
export default {
    createPageManutAPI: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Manutenção de API\'s', '');
        Funct.createInput('base', 'código');
        Funct.createInput('base', 'url');
        Funct.createInput('base', 'parâmetros');
        Funct.createInput('base', 'atualizar em');
        Funct.createInput('base', 'intervalo');
        Funct.createButton('base', 's');
    }
}