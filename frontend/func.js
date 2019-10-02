function cleanContent() {
    const myNode = document.getElementById("content");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function createContentBlock(titleText, contentText, course, center) {
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
            createPageCourse(course);
        }
        if (center === 'cadastro') {
            createPageSingIn();
        }
        if (center === 'manut') {
            createPageManut();
        }
        if (center === 'manutAPI') {
            createPageManutAPI();
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

function createInput(father, title) {
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
}

function createButton(father, type, href) {
    var div = document.createElement('div');
    div.setAttribute('class', 'botoes');
    var button = document.createElement('button');
    button.setAttribute('class', 'entrar');
    if (type === 'c') {
        button.innerHTML = 'cadastrar';
        div.onclick = function() {
            createPageIndex();
        };
    }
    if (type === 'l') {
        button.innerHTML = 'entrar';
        div.onclick = function() {
            createPageIndex();
        };
    }
    if (type === 's') {
        button.innerHTML = 'salvar';
        div.onclick = function() {
            createPageManut();
        };
    }
    if (type === 'b') {
        button.innerHTML = 'comprar';
        button.setAttribute('class', 'botao entrar site');
        div.onclick = function() {
            if (href)
                window.location.href = href;
        };
    }
    div.appendChild(button);
    document.getElementsByClassName(father)[0].appendChild(div);
}


