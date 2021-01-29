function contar() {
    let ini = document.querySelector('input#txti');
    let fim = document.querySelector('input#txtf');
    let passo = document.querySelector('input#txtp');
    let res = document.getElementById('res');
    //res.innerHTML = ''

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO!] Faltando dados!')
    } else {

        res.innerHTML = '<strong>Contando: </strong>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
            //var c = 0

        if (p == 0) {
            p = 1
            alert('passo 0 foi considerado igual a 1')
        }

        if (i > f && p > 0 || i < f && p < 0) {
            alert('situação não possivel')

        } else if (i > f && p < 0) {
            for (let c = i; c >= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`

        } else if (i < f && p > 0) {
            res.innerHTML += `\u{1F3C1} `
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`

            }
            res.innerHTML += `\u{1F3C1}`



        } else {
            alert('não enxergo outra solução aqui')
        }

    }
}