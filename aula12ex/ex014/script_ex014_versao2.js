function carregar() {
    var msg1 = window.document.querySelector('div#msg');
    //var img1 = window.document.querySelector('img#imagem');
    var msh1 = window.document.querySelector('span#msh');
    var res = window.document.querySelector('div#res');
    var data = new Date();
    var hora = data.getHours();
        //hora = 21
    var minuto = data.getMinutes()
        //var segundo = data.getSeconds()
    var img1 = document.createElement('img');
    img1.setAttribute('id','foto')
    msg1.innerHTML = `Agora são ${hora}horas e ${minuto}minutos!`;
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        //img1.src = 'fotomanha.png'
        img1.setAttribute('src','fotomanha.png');
        msh1.innerHTML = 'Bom dia!'
        document.body.style.background = '#e2cd9f'


    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        //img1.src = 'fototarde.png'
        img1.setAttribute('src', 'fototarde.png');
        msh1.innerHTML = 'Boa tarde!'
        document.body.style.background = '#b9846e'
    } else {
        // BOA NOITE
        img1.src = 'fotonoite.png'
        document.body.style.background = '#3c3e42'
        msh1.innerHTML = 'Boa noite!'
    }
res.appendChild(img1);
}