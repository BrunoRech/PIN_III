import Funct from "./func";
import Index from "./index";
import * as $ from "jquery";
export default {
    createPageSingIn: function() {
        var token = window.localStorage.getItem('localToken');
        Funct.cleanContent();
        Funct.createContentBlock('Cadastro' + (token ? ' - Edição' : ' - Novo'), '');
        var oEmail = Funct.createInput('base', 'Email', 'email');
        var oConfEmail = Funct.createInput('base', 'Confirmar Email', 'email');
        var oSenha = Funct.createInput('base', 'Senha', 'password');
        
        if(token){
            var nome = ''; // TODO Como buscar o nome?
            var oNome = Funct.createInput('base', 'Nome', 'text', nome);
        }
        else {
            var oNome = Funct.createInput('base', 'Nome', 'text', nome);
        }
        var oNasc = Funct.createInput('base', 'Nascimento', 'date');
        Funct.createButton('base', 'Confirmar',() => {
            if(oEmail.value != oConfEmail.value){
                window.alert('Os emails estão diferentes.');
                return;
            }
            var oDados : {[k: string]: any} = {
                 email: oEmail.value
                ,password: oSenha.value
                ,name: nome ? nome : oNome.value
                ,birthDate: oNasc.value
            };
            if(token){
                oDados.id = '';// TODO Como buscar o ID?
            }
            $.ajax({
                 url: token ? '/api/users/2' : '/api/users'
                ,type: token ? 'PUT' : 'POST'
                ,data: oDados
            }).done(() => {
                Index.createPageIndex();
            }).fail((oErro) => {
                Index.exibeErroRetornoJson(Funct.stripHtml(oErro.responseText));
            });
        });
        Funct.createButton('base', 'Sair', () => {
            window.localStorage.removeItem('localToken');
            Index.createPageIndex();
        })
        if(token){
            Funct.createContentBlock('Manutenção', '', undefined, 'manut');
        }
    }
}