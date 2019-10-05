import Funct from "./func";
import Index from "./index";
import * as $ from "jquery";
export default {
    createPageManut: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Manutenção de Cursos', '');
        var oNome = Funct.createInput('base', 'Nome');
        var oDescricao = Funct.createInput('base', 'Descrição');
        var oCategoria = Funct.createInput('base', 'Categoria');
        var oPreco = Funct.createInput('base', 'Preço Atual');
        var oAvaliacao = Funct.createInput('base', 'Avaliação');
        var oPlataforma = Funct.createInput('base', 'Plataforma');
        var oImagem = Funct.createInput('base', 'Imagem');
        Funct.createButton('base', 'Enviar', () => {
            var oDados = {
                 category: oCategoria.value
                ,description: oDescricao.value
                ,image: oImagem.value
                ,link: oPlataforma.value
                ,name: oNome.value
                ,occupation: ''
                ,price: oPreco
                ,rating: oAvaliacao
            };
            $.post('/api/courses', oDados).done(() => {
                Index.createPageIndex();
            }).fail((oErro) => {
                window.alert(Funct.stripHtml(oErro.responseText));
            });
        });
        Funct.createContentBlock('Manutenção da API', '', undefined, 'manutAPI');
    }
}