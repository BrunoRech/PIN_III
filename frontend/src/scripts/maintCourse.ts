import Funct from "./func";
import Index from "./index";
import * as $ from "jquery";
export default {
    createPageManut: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Manutenção de Cursos', '');
        var oNome = Funct.createInput('base', 'Nome');
        var oDescricao = Funct.createInput('base', 'Descrição', 'textfield');
        var oCategoria = Funct.createInput('base', 'Categoria');
        var oPreco = Funct.createInput('base', 'Preço Atual', 'number');
        oPreco.setAttribute("min", "0");
        oPreco.setAttribute("max", "10000");
        var oAvaliacao = Funct.createInput('base', 'Avaliação', 'number');
        oAvaliacao.setAttribute("min", "0");
        oAvaliacao.setAttribute("max", "10");
        oAvaliacao.setAttribute("step", "0.1");
        var oPlataforma = Funct.createInput('base', 'Link', 'url');
        var oImagem = Funct.createInput('base', 'Imagem', 'image');
        oImagem.setAttribute('title', '(Resolução preferida de 200px por 125px)')
        Funct.createButton(document.getElementsByClassName('base')[0], 'Enviar', async () => {
            var oDados = {
                 category: oCategoria.value
                ,description: oDescricao.value
                ,link: oPlataforma.value
                ,name: oNome.value
                ,occupation: ''
                ,price: oPreco.value
                ,rating: oAvaliacao.value
            };
            
            var formData = new FormData();
            for (var key in oDados ) {
                formData.append(key, oDados[key]);
            }
            formData.append('image', oImagem.files[0]);

            $.ajax({
                 url: '/api/courses'
                ,type: 'POST'
                ,data: formData
                ,processData: false
                ,contentType: false
            }).done(() => {
                window.alert(Funct.stripHtml("Cadastrado com Sucesso!"));
                this.createPageManut();
            }).fail((oErro) => {
                window.alert(Funct.stripHtml(oErro.responseText));
            });
        });
        // Funct.createContentBlock('Manutenção da API', '', undefined, 'manutAPI');
    }
}