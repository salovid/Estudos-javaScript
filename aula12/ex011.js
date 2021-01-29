//Idade para votar
var idade = 55
var readlineSync = require('readline-sync')
var idade = readlineSync.question(`Digite a sua idade: `)
idade = parseFloat(idade)
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}