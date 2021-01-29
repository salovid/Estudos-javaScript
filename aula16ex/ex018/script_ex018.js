let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []



function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false

    }

}

function inLista(n, l) {
    // parametro n é o numero e l é a lista na criação da função.
    // num é o argumento na chamada da função inLista para o parametro n
    // lista é o valor de argumento do parameto l.
    if (l.indexOf(Number(n)) != -1) {
        // O valor existe
        return true
    } else {
        return false
    }

}

function adicionar() {
    // chamada da função isNumero(num.value) onde num.value são os argumentos quando da chamada
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //só vai adicionar se é um número e não estiver dentro da lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        console.log(item)
        lista.appendChild(item)

        res.innerHTML = '' // limpa a tela de saída de resultados

    } else {
        window.alert('Valor invalido ou ja encontado na lista')
    }
    num.value = '' //zera o valor anterior da tela
    num.focus() //pisca o cursor

}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione numeros antes de finalizar')
    } else {
        let tam = valores.length
            /*console.log('Ao todo temos ' + tam + ' numeros cadastrados')
            console.log(valores)*/
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${tam} numeros cadastrados </br> `

        // Valor mínimo e máximo dos valores cadastrados:
        //2, 7, 8, 6
        // o primeiro numero é o maior e o menor..
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) {
                //valores[pos] destrona maior anterior e acaba recebendo o titulo de maior seguinte
                // e assim valores[pos] vai caminhando posição a posição
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        res.innerHTML += `O maior valor informado foi ${maior}</br>`
        res.innerHTML += `O menor valor informado foi ${menor}</br>`
        res.innerHTML += `A soma dos valores informados é ${soma}</br>`


        /*

        let soma = 0
        for (let pos = 0; pos < valores.length; pos++) {
            soma += valores[pos]
        }
        console.log('A soma é: ' + soma)

        res.innerHTML += `A soma de todos valores é: ${soma}</br>`*/

        /*Array.min = function(array) {
            return Math.min.apply(Math, array);
        }
        let vlrMin = Array.min(valores)
        console.log('Valor mínimo é: ' + vlrMin)
        res.innerHTML += `O menor valor na fila foi ${vlrMin} na posicao ${1 + valores.indexOf(vlrMin)}</br>`


        Array.max = function(array) {
            return Math.max.apply(Math, array)
        }
        let vlrMax = Array.max(valores)
        console.log('Valor máximo é: ' + vlrMax)
        res.innerHTML += `O maior valor foi ${vlrMax}</br>`
        */

        if (tam == 0) {
            alert('Não e possivel tirar a media')

        }
        media = soma / tam
        console.log('A média é: ' + media)
        if (soma % tam != 0) {
            res.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}`
        } else {
            res.innerHTML += `A média dos valores digitados é ${media}`
        }

    }

}