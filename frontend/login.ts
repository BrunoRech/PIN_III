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
            $.post('/api/login', oDados).done((sToken) => {
                window.localStorage.setItem('localToken', sToken);
                Index.createPageIndex();
            }).fail((oErro) => {
                window.alert(Funct.stripHtml(oErro.responseText));
            });
        });
        Funct.createContentBlock('Cadastro', '', undefined, 'cadastro');
    }
}

