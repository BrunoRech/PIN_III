import * as $ from "jquery";
import Login from "./login";
import Funct from "./func";
import Search from "./search";
export default {
    exibeErroRetornoJson(xRetorno){
        if(typeof(xRetorno) == 'string'){
            try{
                xRetorno = JSON.parse(xRetorno);
            }
            catch (ex){
                xRetorno = {
                    erro: xRetorno
                }
            }
        }
        if(xRetorno.erro || xRetorno.error){
            window.alert(xRetorno.erro ? xRetorno.erro : xRetorno.error)
        }
        else {
            window.alert('Erro na requisição.')
        }
    }
    ,createPageIndex: function() {
        Funct.cleanContent();
        $('#input_busca').css('opacity', 1);
        $('#botao_busca').css('opacity', 1);
        
        var base = document.createElement('div');
        base.setAttribute('class', 'imagem');
        var imagem = document.createElement('img');
        imagem.setAttribute('src', 'javascript.png');
        imagem.setAttribute('alt', 'curso');
        imagem.setAttribute('class', 'imagem');
        base.appendChild(imagem);
        
        document.getElementById("content").appendChild(base);
        
        Funct.createContentBlock('Javascript', 'Aprenda a linguagem que move a web. Acesse a nossa seleção de cursos de\
        Javascript e você estará pronto para enfrentar o mercado a qualquer momento.', 'Javascript');
    
        Funct.createContentBlock('Encontre um curso para você agora mesmo!', 'Nosso sistema de pesquisa traz para você\
        a lista de cursos desejados com base em diversos filtros.<br/>Nosso banco de dados é populado com diversos cursos\
        de diversos locais, assim você pode encontrar o curso que deseja o mais rápido o possível.', '', 'search');
    
        Funct.createContentBlock('Conheça nossa plataforma', 'Nossa plataforma traz pra você a mais diversa seleção de\
        cursos, para que você esteja preparado a qualquer momento!');
    }

    ,createOnLoad: function(){
        $(window).on('load', () => {
            this.createPageIndex();
            $('#logo').on('click', () => { this.createPageIndex(); });
            $('#botao_login').on('click', () => { Login.createPageLogin(); });
            var oBotaoBusca = $('#botao_busca');
            var oInputBusca = $('#input_busca');
            var fnProc = () => {
                if((<string> oInputBusca.val()).length > 0){
                    oBotaoBusca.css('opacity', 1);
                    oBotaoBusca.css('pointer-events', 'initial');
                }
                else {
                    oBotaoBusca.css('opacity', 0);
                    oBotaoBusca.css('pointer-events', 'none');
                }
            };
            oInputBusca.on('input blur', fnProc);
            oInputBusca.on('keydown', (event) => {
                if(event.key == 'Enter' || (event.keyCode || event.which) == 13){
                    oBotaoBusca.trigger('click');
                }
            });
            fnProc();
            oBotaoBusca.on('click', () =>{
                if(oInputBusca.val()){
                    Search.createPageSearch(<string>oInputBusca.val());
                }
            });
        })
    }
}