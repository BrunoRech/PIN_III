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
        
        Funct.createContentBlock('Javascript', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\
            Morbi facilisis blandit accumsan. Morbi elementum lacus id tempor egestas. \n\
            Maecenas tristique leo et pharetra pulvinar.', 'Javascript');
    
        Funct.createContentBlock('Encontre um curso para você agora mesmo!',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, \n\
                 mauris nec dictum eleifend, eros felis rhoncus dui, quis pulvinar dui neque in neque. \n\
                 Nullam finibus tempus pretium. Ut aliquet leo a orci mattis, finibus lacinia est aliquet. \n\
                 Vivamus sollicitudin nec nunc ac posuere. Ut vulputate volutpat interdum. \n\
                 Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent orci ex, bibendum venenatis \n\
                 mattis quis, auctor aliquam orci. Orci varius natoque penatibus et magnis dis parturient \n\
                 montes, nascetur ridiculus mus. Donec ut elit sit amet odio lobortis blandit vitae vel eros. \n\
                 Integer arcu dui, iaculis vel fringilla et, volutpat vel diam. Aliquam erat volutpat. Ut nec \n\
                 augue eget felis ornare malesuada id at erat. Nunc consequat eu nunc vitae iaculis. \n\
                 Vivamus pulvinar sollicitudin nulla, ut auctor leo luctus non. Nullam a vulputate velit.');
    
        Funct.createContentBlock('Conheça nossa plataforma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\
            Morbi facilisis blandit accumsan. Morbi elementum lacus id tempor egestas. \n\
            Maecenas tristique leo et pharetra pulvinar.');
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
                    Search.createPageSearch(oInputBusca.val());
                }
            });
        })
    }
}