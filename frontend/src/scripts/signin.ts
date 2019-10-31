import Funct from "./func";
import Index from "./index";
import * as $ from "jquery";
export default {
    createPageSingIn: function() {
        var token = window.localStorage.getItem('localToken');
        Funct.cleanContent();
        
        Funct.getDadosUsuarioAtual().then(function(oUsuarioAtual : any){
            Funct.createContentBlock('Cadastro' + (token ? ' - Edição' : ' - Novo'), '');
            if(oUsuarioAtual){
                var oEmail = Funct.createInput('base', 'Email', 'email', oUsuarioAtual.email);
                var oConfEmail = Funct.createInput('base', 'Confirmar Email', 'email');
                var oSenha = Funct.createInput('base', 'Senha', 'password');
                var oNome = Funct.createInput('base', 'Nome', 'text', oUsuarioAtual.name, true);
                var oNasc = Funct.createInput('base', 'Nascimento', 'date', oUsuarioAtual.birthDate);
            }
            else {
                var oEmail = Funct.createInput('base', 'Email', 'email');
                var oConfEmail = Funct.createInput('base', 'Confirmar Email', 'email');
                var oSenha = Funct.createInput('base', 'Senha', 'password');
                var oNome = Funct.createInput('base', 'Nome', 'text');
                var oNasc = Funct.createInput('base', 'Nascimento', 'date');
            }
            Funct.createButton('base', 'Confirmar',() => {
                if(!oEmail.checkValidity()){
                    window.alert('Email inválido');
                    return;
                }
                if(!oNasc.checkValidity()){
                    window.alert('Data de nascimento inválida');
                    return;
                }
                if(oEmail.value != oConfEmail.value){
                    window.alert('Os emails estão diferentes.');
                    return;
                }
                var oDados : {[k: string]: any} = {
                     name: oUsuarioAtual.name ? oUsuarioAtual.name : oNome.value
                };
                if(oEmail.value){
                    oDados.email = oEmail.value;
                }
                if(oSenha.value){
                    oDados.password = oSenha.value;
                }
                if(oNasc.value){
                    oDados.birthDate = oNasc.value;
                }
                if(token){
                    oDados.id = oUsuarioAtual.id;
                }
                $.ajax({
                     url: token ? '/api/users/' + oUsuarioAtual.id : '/api/users'
                    ,type: token ? 'PUT' : 'POST'
                    ,data: oDados
                }).done(() => {
                    $('#botao_login>span').detach();
                    Index.createPageIndex();
                }).fail((oErro) => {
                    if(oErro.status == 200){
                        $('#botao_login>span').detach();
                        Index.createPageIndex();
                    }
                    else {
                        Index.exibeErroRetornoJson(Funct.stripHtml(oErro.responseText));
                    }
                });
            });
            Funct.createButton('base', 'Sair', () => {
                window.localStorage.removeItem('localToken');
                window.localStorage.removeItem('localId');
                $('#botao_login>span').detach();
                Index.createPageIndex();
            })
            if(token){
                Funct.createContentBlock('Manutenção', '', undefined, 'manut');
            }
        });
    }
}