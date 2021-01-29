let valores = [4, 5, 6, 7, 8, 'sete', 4, 2, 9, '1', true]


for (let pos in valores) {
    console.log(`${pos}: ${valores[pos]}`)
}
console.log(`${valores.indexOf(8)}: ${valores[4]}`)

let vlr = 2
let posic = valores.indexOf(vlr)
if (posic == -1) {
    console.log(`O valor ${vlr} não foi encontrado`)
} else {
    console.log(`O valor ${vlr} esta na posição ${posic}`)
}