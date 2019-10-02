$(window).load(function(){
    var oBotaoBusca = $('#botao_busca');
    var oInputBusca = $('#input_busca');
    var fnProc = () => {
        if(oInputBusca.val().length > 0){
            oBotaoBusca.css('opacity', 1);
            oBotaoBusca.css('pointer-events', 'initial');
        }
        else {
            oBotaoBusca.css('opacity', 0);
            oBotaoBusca.css('pointer-events', 'none');
        }
    };
    oInputBusca.on('input blur', fnProc);
    fnProc();
    oBotaoBusca.on('click', () =>{
        if(oInputBusca.val()){
            createPageSearch(oInputBusca.val());
        }
    });
})

function createPageIndex() {
    cleanContent();
    
    var base = document.createElement('div');
    base.setAttribute('class', 'imagem');
    var imagem = document.createElement('img');
    imagem.setAttribute('src', 'javascript.png');
    imagem.setAttribute('alt', 'curso');
    imagem.setAttribute('class', 'imagem');
    base.appendChild(imagem);
    
    document.getElementById("content").appendChild(base);
    
    createContentBlock('Javascript', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\
        Morbi facilisis blandit accumsan. Morbi elementum lacus id tempor egestas. \n\
        Maecenas tristique leo et pharetra pulvinar.', 'Javascript');

    createContentBlock('Encontre um curso para você agora mesmo!',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, \n\
             mauris nec dictum eleifend, eros felis rhoncus dui, quis pulvinar dui neque in neque. \n\
             Nullam finibus tempus pretium. Ut aliquet leo a orci mattis, finibus lacinia est aliquet. \n\
             Vivamus sollicitudin nec nunc ac posuere. Ut vulputate volutpat interdum. \n\
             Aliquam erat volutpat. In hac habitasse platea dictumst. Praesent orci ex, bibendum venenatis \n\
             mattis quis, auctor aliquam orci. Orci varius natoque penatibus et magnis dis parturient \n\
             montes, nascetur ridiculus mus. Donec ut elit sit amet odio lobortis blandit vitae vel eros. \n\
             Integer arcu dui, iaculis vel fringilla et, volutpat vel diam. Aliquam erat volutpat. Ut nec \n\
             augue eget felis ornare malesuada id at erat. Nunc consequat eu nunc vitae iaculis. \n\
             Vivamus pulvinar sollicitudin nulla, ut auctor leo luctus non. Nullam a vulputate velit.');

    createContentBlock('Conheça nossa plataforma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n\
        Morbi facilisis blandit accumsan. Morbi elementum lacus id tempor egestas. \n\
        Maecenas tristique leo et pharetra pulvinar.');
}