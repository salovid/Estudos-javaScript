function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
        //alert(data)

    if (Number(fano.value) > ano || fano.value.length == 0) {
        alert('[ERRO!] - Verifique os dados e tente novamente')
    } else if (Number(fano.value) < 1900) {
        alert('Ano tem que ser acima de 1900')
    } else {
        //alert('beleza!')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
            //res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img')
            // Criando a tag <img id="foto">
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
                // Decisao das idades para o gênero Homem
            if (idade <= 1 && idade >= 0) {
                // Bebê
                img.setAttribute('src', 'bebe.png')
            } else if (idade > 1 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca_masculino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem_masculino.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto_masculino.png')
            } else if (idade < 70) {
                // Idoso
                img.setAttribute('src', 'idoso_masculino.png')
            } else {
                // Muito Idoso
                img.setAttribute('src', 'idoso_plus_masculino.png')
                    //res.innerHTML = `Detectamos ${genero} com mais de 70 e menos de ${idade} anos.`
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
                // Mesma decisao das idades genero homem, mas para o gênero Mulher
            if (idade <= 1) {
                // Bebê
                img.setAttribute('src', 'bebe.png')
            } else if (idade > 1 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca_feminino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem_feminino.png')

            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto_feminino.png')
            } else if (idade < 70) {
                // Idoso
                img.setAttribute('src', 'idoso_feminino.png')
            } else {
                // Muito Idoso
                img.setAttribute('src', 'idoso_plus_feminino.png')
            }
        }
        res.style.textAlign = 'center'

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

        res.appendChild(img)
    }



}