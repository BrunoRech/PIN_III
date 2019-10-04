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

    ,createInput: function(father, title) {
        var div = document.createElement('div');
        div.setAttribute('class', 'botoes');
        var label = document.createElement('label');
        if (title) {
            label.innerHTML = title;
        }
        div.appendChild(label);
        var button = document.createElement('input');
        button.setAttribute('class', 'botao');
        div.appendChild(button);
        document.getElementsByClassName(father)[0].appendChild(div);
        return button;
    }

    ,createButton: function(father, type, fn?: Function) {
        var div = document.createElement('div');
        div.setAttribute('class', 'botoes');
        var button = document.createElement('button');
        button.setAttribute('class', 'entrar');
        if (type === 'c') {
            button.innerHTML = 'cadastrar';
            div.onclick = () => {
                this.createPageIndex();
            };
        }
        if (type === 'l') {
            button.innerHTML = 'entrar';
            div.onclick = () => {
                this.createPageIndex();
            };
        }
        if (type === 's') {
            button.innerHTML = 'salvar';
            $(div).on('click', (event: $.Event) => fn);
        }
        div.appendChild(button);
        document.getElementsByClassName(father)[0].appendChild(div);
    }
}