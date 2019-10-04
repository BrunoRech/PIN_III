import Funct from "./func";
export default {
    createPageManut: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Manutenção de Cursos', '');
        Funct.createInput('base', 'código');
        Funct.createInput('base', 'nome');
        Funct.createInput('base', 'descrição');
        Funct.createInput('base', 'categoria');
        Funct.createInput('base', 'preço atual');
        Funct.createInput('base', 'avaliação');
        Funct.createInput('base', 'plataforma');
        Funct.createButton('base', 's', function(){

        });
        Funct.createContentBlock('Manutenção da API', '', undefined, 'manutAPI');
    }
}