import Funct from "./func";
import * as $ from "jquery";
export default {
    createPageCourse: function(course: string) {
        course = "18";
        Funct.cleanContent();
        $.get('/api/courses/' + course).done((ret)=>{
            ret = ret;
            this.createCourse(ret.id + ' - ' + ret.name,
                    ret.description,
                    ret.rating,
                    ret.category,
                    ret.price);
            Funct.createButton('base', 'Acessar', function(){
                window.open(ret.link, 'blank');
            });
        }).fail((oErro)=>{
            window.alert(Funct.stripHtml(oErro.responseText));
        });
    }

    ,createCourse: function(titletx, descrtx, iRating, sCategory, valuetx) {
        var base = document.createElement('div');

        var title = document.createElement('h1');
        title.setAttribute('class', 'title');
        title.innerHTML = titletx;
        base.appendChild(title);

        var descr = document.createElement('p');
        descr.innerHTML = descrtx;
        descr.setAttribute('class', 'descr');
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