import Funct from "./func";
import Index from "./index";
import * as $ from "jquery";
export default {
    createPageLogin: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Login', '');
        var oBotaoUsuario = Funct.createInput('base', 'E-Mail');
        var oBotaoSenha = Funct.createInput('base', 'Senha');
        Funct.createButton('base', 'Login', () => {
            var oDados = {
                 email: oBotaoUsuario.value
                ,password: oBotaoSenha.value
            }
            $.post('/api/login', oDados).done((oToken) => {
                if(oToken && oToken.auth && oToken.token){
                    window.localStorage.setItem('localToken', oToken.token);
                    Index.createPageIndex();
                }
                else {
                    window.alert(Funct.stripHtml("Erro no login."));
                }
            }).fail((oErro) => {
                Index.exibeErroRetornoJson(Funct.stripHtml(oErro.responseText));
            });
        });
        Funct.createContentBlock('Cadastro', '', undefined, 'cadastro');
    }
}