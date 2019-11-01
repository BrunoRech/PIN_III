import Funct from "./func";
import Index from "./index";
import Signin from "./signin";
import * as $ from "jquery";
export default {
    createPageLogin: function() {
        var token = window.localStorage.getItem('localToken');
        if(token){
            Signin.createPageSingIn();
            return;
        }
        Funct.cleanContent();
        Funct.createContentBlock('Login', '');
        var oBotaoUsuario = Funct.createInput('base', 'E-Mail');
        var oBotaoSenha = Funct.createInput('base', 'Senha', 'password');
        Funct.createButton('base', 'Login', () => {
            var oDados = {
                 email: oBotaoUsuario.value
                ,password: oBotaoSenha.value
            }
            $.post('/api/login', oDados).done((oToken) => {
                if(oToken && oToken.auth && oToken.token){
                    window.localStorage.setItem('localToken', oToken.token);
                    window.localStorage.setItem('localId',    oToken.user.id);
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