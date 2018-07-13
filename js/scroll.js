function scroll(seletor){
    $(seletor).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
}

scroll('a[href*=painel-descricao]');
scroll('a[href*=painel-palestrantes]');
scroll('a[href*=secao-formulario]');