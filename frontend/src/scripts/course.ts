import Funct from "./func";
import * as $ from "jquery";
export default {
    createPageCourse: function(course: string) {
        Funct.cleanContent();
        $.get('/api/courses/' + course).done((ret)=>{
            ret = ret;
            this.createCourse(
                ret.image,
                ret.id + ' - ' + ret.name,
                ret.description,
                ret.rating,
                ret.category,
                ret.price);
            Funct.createButton(document.getElementsByClassName('base')[0], 'Acessar', function(){
                window.open(ret.link, 'blank');
            });
        }).fail((oErro)=>{
            window.alert(Funct.stripHtml(oErro.responseText));
        });
    }

    ,createCourse: function(sImage, titletx, descrtx, iRating, sCategory, valuetx) {
        var base = document.createElement('div');

        var oImg = $('<img>').addClass('imagem_curso').appendTo(base);
        if(/https?:\/\/\w+\.\w+\.\w+\/.+/.test(sImage)){
            oImg.attr('src', sImage);
        }
        else {
            oImg.attr('src', '/upload/' + sImage);
        }

        var title = document.createElement('h1');
        title.setAttribute('class', 'title titulo_curso');
        title.innerHTML = titletx;
        base.appendChild(title);

        var descr = document.createElement('p');
        descr.innerHTML = descrtx;
        descr.setAttribute('class', 'descr descricao_curso');
        base.appendChild(descr);

        title = document.createElement('h2');
        title.setAttribute('class', 'title');
        title.innerHTML = 'Categoria';
        base.appendChild(title);

        descr = document.createElement('p');
        descr.innerHTML = sCategory;
        descr.setAttribute('class', 'descr left');
        base.appendChild(descr);

        title = document.createElement('h2');
        title.setAttribute('class', 'title');
        title.innerHTML = 'Avaliação';
        base.appendChild(title);

        descr = document.createElement('p');
        descr.innerHTML = iRating;
        descr.setAttribute('class', 'descr left');
        base.appendChild(descr);

        var div2 = document.createElement('div');
        div2.setAttribute('class', 'course03');

        var value = document.createElement('label');
        value.setAttribute('class', 'defCourse');
        value.innerHTML = 'valor';
        div2.appendChild(value);

        var valuet = document.createElement('label');
        valuet.setAttribute('class', 'valCourse');
        valuet.innerHTML = valuetx;
        div2.appendChild(valuet)

        div2.appendChild(value);
        div2.appendChild(valuet);
        base.appendChild(div2);
        base.setAttribute('class', 'base');
        document.getElementById("content").appendChild(base);
    }
};