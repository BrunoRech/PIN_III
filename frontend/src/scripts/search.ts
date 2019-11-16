import Funct from "./func";
import Course from "./course";
import * as $ from 'jquery';
export default {
    createPageSearch: function(course: string = '', price: string = '', rating: string = '', category: string = '') {
        Funct.cleanContent();
        var base = document.createElement('div');
        base.setAttribute('class', 'base');
        var title = document.createElement('h1');
        title.innerHTML = 'Busque sua área de interesse ou Curso desejado';
        title.setAttribute('class', 'titleCourse');
        base.appendChild(title);
        document.getElementById("content").appendChild(base);

        var div = document.createElement('div');
        var button = document.createElement('input');
        button.setAttribute('class', 'botao search1');
        button.setAttribute('placeholder', 'Nome');
        div.appendChild(button);
        document.getElementsByClassName('base')[0].appendChild(div);
        button.value = course;
        $('#input_busca').css('opacity', 0);
        $('#botao_busca').css('opacity', 0);

        var div1 = document.createElement('div');
        div1.setAttribute('class', 'inline')
        var buttonP = document.createElement('input');
        buttonP.setAttribute('class', 'botao search');
        buttonP.setAttribute("placeholder", "Preço (Menor ou Igual)");
        buttonP.setAttribute('type', 'number');
        buttonP.setAttribute('min', '0');
        buttonP.setAttribute('max', '10000');
        buttonP.value = price;
        div1.appendChild(buttonP);
        var buttonR = document.createElement('input');
        buttonR.setAttribute('class', 'botao search');
        buttonR.setAttribute("placeholder", "Avaliação (Maior ou Igual)");
        buttonR.setAttribute('type', 'number');
        buttonR.setAttribute('min', '0');
        buttonR.setAttribute('max', '10000');
        buttonR.value = rating;
        div1.appendChild(buttonR);
        var buttonI = document.createElement('input');
        buttonI.setAttribute('class', 'botao search');
        buttonI.setAttribute("placeholder", "Categoria");
        buttonI.value = category;
        div1.appendChild(buttonI);
        document.getElementsByClassName('base')[0].appendChild(div1);
        Funct.createButton(base, "Buscar", () => {
            this.beginSearch(button.value, buttonP.value, buttonR.value, buttonI.value);
        });
        if(course || price || rating || category){
            this.beginSearch(course);
        }
    }

    ,beginSearch: function(course: string, price?: string, rating?: string, category?: string){
        var aQuery = [];
        if(course){
            aQuery.push("name=" + course);
        }
        if(price){
            aQuery.push("price=" + price);
        }
        if(rating){
            aQuery.push("rating=" + rating);
        }
        if(category){
            aQuery.push("category=" + category);
        }
        $.get('/api/courses/query?' + aQuery.join('&')).done((res) => {
            res.forEach((oEl) => {
                this.createCourseSerch(oEl.name, oEl.description, oEl.price, oEl.id);
            });
        }).fail((oErro) => {
            window.alert(Funct.stripHtml(oErro.responseText));
        });
    }

    ,createCourseSerch: function(titleText, description, valuetl, code) {
        var base = document.createElement('div');
        base.setAttribute('class', 'base');

        var div1 = document.createElement('div');
        div1.setAttribute('class', 'course01');

        var title = document.createElement('h1');
        title.innerHTML = titleText;
        title.setAttribute('class', 'titleCourse');
        div1.appendChild(title);

        var descr = document.createElement('p');
        descr.innerHTML = description;
        descr.setAttribute('class', 'descrCourse');
        div1.appendChild(descr);

        var div2 = document.createElement('div');
        div2.setAttribute('class', 'course02');

        var value = document.createElement('label');
        value.setAttribute('class', 'defCourse');
        value.innerHTML = 'valor';
        div2.appendChild(value);

        var valuet = document.createElement('label');
        valuet.setAttribute('class', 'valCourse');
        valuet.innerHTML = valuetl;
        div2.appendChild(valuet);

        var select = document.createElement('label');
        select.setAttribute('class', 'defCourse select');
        select.innerHTML = 'ver mais';
        select.onclick = () => {
            Course.createPageCourse(code);
        };
        div1.appendChild(select);

        base.appendChild(div1);
        base.appendChild(div2);
        document.getElementById("content").appendChild(base);
    }
}