import Funct from "./func";
export default {
    createPageCourse: function(course: string) {
        Funct.cleanContent();
        this.createCourse('A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G');
        Funct.createButton('base', 'b', function(){
            window.open('https://www.udemy.com/course/curso-web/', 'blank');
        });
    }

    ,createCourse: function(titletx, descrtx, timetx, avaliabletx, certificatetx, valuetx, totaltimetx) {
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
        title.innerHTML = 'Duração total';
        base.appendChild(title);

        descr = document.createElement('p');
        descr.innerHTML = timetx;
        descr.setAttribute('class', 'descr left');
        base.appendChild(descr);

        title = document.createElement('h2');
        title.setAttribute('class', 'title');
        title.innerHTML = 'Disponibilidade';
        base.appendChild(title);

        descr = document.createElement('p');
        descr.innerHTML = avaliabletx;
        descr.setAttribute('class', 'descr left');
        base.appendChild(descr);

        title = document.createElement('h2');
        title.setAttribute('class', 'title');
        title.innerHTML = 'Certificado';
        base.appendChild(title);

        descr = document.createElement('p');
        descr.innerHTML = certificatetx;
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
        div2.appendChild(valuet);

        var time = document.createElement('label');
        time.setAttribute('class', 'defCourse');
        time.innerHTML = 'duração';
        div2.appendChild(time);

        var timet = document.createElement('label');
        timet.setAttribute('class', 'valCourse');
        timet.innerHTML = totaltimetx;
        div2.appendChild(timet);

        div2.appendChild(value);
        div2.appendChild(valuet);
        div2.appendChild(time);
        div2.appendChild(timet);
        base.appendChild(div2);
        base.setAttribute('class', 'base');
        document.getElementById("content").appendChild(base);
    }
};