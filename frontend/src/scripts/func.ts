import * as $ from "jquery";
import Course from "./course";
import Signin from "./signin";
import Manut  from "./maintCourse";
import ManutAPI from "./maintAPI";
export default {

    cleanContent: function() {
        const myNode = document.getElementById("content");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
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
                Course.createPageCourse(course);
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

    ,createInput: function(father, title, type:string = 'text', value:string = null) {
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
        if(value !== null){
            button.value = value;
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
        document.getElementsByClassName(father)[0].appendChild(div);
    }
    ,stripHtml: function (html){
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
    }
}