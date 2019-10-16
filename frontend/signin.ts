import Funct from "./func";
import Index from "./index";
import * as $ from "jquery";
export default {
    createPageSingIn: function() {
        Funct.cleanContent();
        Funct.createContentBlock('Cadastro - Edição', '');
        var oEmail = Funct.createInput('base', 'Email');
        var oConfEmail = Funct.createInput('base', 'Confirmar Email');
        var oSenha = Funct.createInput('base', 'Senha');
        var oNome = Funct.createInput('base', 'Nome');
        var oNasc = Funct.createInput('base', 'Nascimento');
        Funct.createButton('base', 'Confirmar',() => {
            if(oEmail.value != oConfEmail.value){
                window.alert('Os emails estão diferentes.');
                return;
            }
            var oDados = {
                 email: oEmail.value
                ,password: oSenha.value
                ,name: oNome.value
                ,birthDate: oNasc.value
            };
            $.post('/api/users', oDados).done(() => {
                Index.createPageIndex();
            }).fail((oErro) => {
                Index.exibeErroRetornoJson(Funct.stripHtml(oErro.responseText));
            });
        });
        Funct.createContentBlock('Manutenção', '', undefined, 'manut');
    }
}