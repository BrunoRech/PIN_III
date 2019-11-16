import * as $ from "jquery";
import Course from "./course";
import Signin from "./signin";
import Manut  from "./maintCourse";
import ManutAPI from "./maintAPI";
import Index from "./index";
import Search from "./search";
import { rejects } from "assert";
export default {

    cleanContent: function() {
        const myNode = document.getElementById("content");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        var oUsuarioAtual = $('#botao_login>span');
        if(oUsuarioAtual.length == 0){
            this.getDadosUsuarioAtual().then(function(oDados : any){
                if(oDados){
                    $('<span>').html(oDados.name).prependTo($('#botao_login'));
                }
            });
        }
    }
    
    ,getDadosUsuarioAtual: function(){
        var me  = this;
        return new Promise(function(resolve, reject) {
            var token = window.localStorage.getItem('localToken');
            if(token){
                var sId = window.localStorage.getItem('localId');
                $.get('/api/users/' + sId).done(function(res){
                    if(!res[0]){
                        window.localStorage.removeItem('localToken');
                        window.localStorage.removeItem('localId');
                        $('#botao_login>span').detach();
                        Index.createPageIndex();
                        reject();
                    }
                    else {
                        resolve(res[0]);
                    }
                }).fail(function(oErro){
                    Index.exibeErroRetornoJson(me.stripHtml(oErro.responseText));
                    reject();
                });
            }
            else {
                resolve(null);
            }
        });
    }

    ,createContentBlock: function(titleText, contentText, course?, center?) {
        var base = document.createElement('div');

        if (center === 'cadastro' || center === 'manut' || center === 'manutAPI') {
            base.setAttribute('class', 'basep base');
        } else {
            base.setAttribute('class', 'base');
        }

        if(center || course){
            $(base).addClass('base_link');
        }

        base.onclick = function() {
            if (course) {
                Search.createPageSearch('', '', '', course);
            }
            if (center === 'cadastro') {
                Signin.createPageSingIn();
            }
            if (center === 'manut') {
                Manut.createPageManut();
            }
            if (center === 'manutAPI') {
                ManutAPI.createPageManutAPI();
            }
            if (center === 'search') {
                Search.createPageSearch();
            }
        };

        var title = document.createElement('h1');
        title.innerHTML = titleText;

        if (center === 'cadastro' || center === 'manut' || center === 'manutAPI') {
            title.setAttribute('class', 'title center');
        } else {
            title.setAttribute('class', 'title');
        }
        base.appendChild(title);

        var descr = document.createElement('p');
        descr.innerHTML = String(contentText);
        descr.setAttribute('class', 'descr');
        base.appendChild(descr);

        document.getElementById("content").appendChild(base);
    }

    ,createInput: function(father, title, type:string = 'text', value:string = null, disabled:boolean = false):HTMLInputElement {
        var div = document.createElement('div');
        div.setAttribute('class', 'botoes');
        var label = document.createElement('label');
        if (title) {
            label.innerHTML = title;
        }
        div.appendChild(label);
        var button;
        if(type == 'textfield'){
            button = document.createElement('textarea');
            $(button).css('height', '5em');
            $(button).css('width', '20em');
        }
        else {
            button = document.createElement('input');
            if(type == 'image'){
                type = 'file';
                button.setAttribute('accept', 'image/png,image/jpeg')
            }
            button.setAttribute('type', type);
        }
        button.setAttribute('class', 'botao');
        if(value){
            button.value = value;
        }
        if(disabled){
            button.setAttribute('readOnly', '');
        }
        div.appendChild(button);
        document.getElementsByClassName(father)[0].appendChild(div);
        return button;
    }

    ,createButton: function(father, nome, fn?: Function) {
        var div = document.createElement('div');
        div.setAttribute('class', 'botoes');
        var button = document.createElement('button');
        button.setAttribute('class', 'entrar');
        button.innerHTML = nome;
        $(button).on('click', () => { fn(); });
        div.appendChild(button);
        father.appendChild(div);
    }
    ,stripHtml: function (html){
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
    }
}