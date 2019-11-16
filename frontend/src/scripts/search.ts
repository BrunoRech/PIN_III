import Funct from "./func";
import Course from "./course";
import * as $ from 'jquery';
export default {
    createPageSearch: function(course) {
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
        div.appendChild(button);
        document.getElementsByClassName('base')[0].appendChild(div);
        button.value = course;
        $('#input_busca').css('opacity', 0);
        $('#botao_busca').css('opacity', 0);

        var div1 = document.createElement('div');
        div1.setAttribute('class', 'inline')
        var button = document.createElement('input');
        button.setAttribute('class', 'botao search');
        div1.appendChild(button);
        button = document.createElement('input');
        button.setAttribute('class', 'botao search');
        div1.appendChild(button);
        button = document.createElement('input');
        button.setAttribute('class', 'botao search');
        div1.appendChild(button);
        document.getElementsByClassName('base')[0].appendChild(div1);

        this.createCourseSerch('JavaScript - Udemy',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, \n\
                mauris nec dictum eleifend, eros felis rhoncus dui, quis pulvinar dui neque in neque.',
                '200,00',
                '40h',
                'JS');
        this.createCourseSerch('JavaScript - Udemy',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, \n\
                mauris nec dictum eleifend, eros felis rhoncus dui, quis pulvinar dui neque in neque. \n\
                Nullam finibus tempus pretium. Ut aliquet leo a orci mattis, finibus lacinia est aliquet. \n\
                Vivamus sollicitudin nec nunc ac posuere. Ut vulputate volutpat interdum. \n\
                Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent orci ex, bibendum venenatis \n\
                mattis quis, auctor aliquam orci. Orci varius natoque penatibus et magnis dis parturient \n\
                montes, nascetur ridiculus mus. Donec ut elit sit amet odio lobortis blandit vitae vel eros. \n\
                Integer arcu dui, iaculis vel fringilla et, volutpat vel diam. Aliquam erat volutpat. Ut nec \n\
                augue eget felis ornare malesuada id at erat. Nunc consequat eu nunc vitae iaculis. \n\
                Vivamus pulvinar sollicitudin nulla, ut auctor leo luctus non. Nullam a vulputate velit.',
                '200,00',
                '40h',
                'JS');
        this.createCourseSerch('JavaScript - Udemy',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, \n\
                mauris nec dictum eleifend, eros felis rhoncus dui, quis pulvinar dui neque in neque.',
                '200,00',
                '40h',
                'JS');
    }

    ,createCourseSerch: function(titleText, description, valuetl, timetl, code) {
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

        var time = document.createElement('label');
        time.setAttribute('class', 'defCourse');
        time.innerHTML = 'duração';
        div2.appendChild(time);

        var timet = document.createElement('label');
        timet.setAttribute('class', 'valCourse');
        timet.innerHTML = timetl;
        div2.appendChild(timet);

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