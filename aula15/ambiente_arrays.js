let num = [5, 8, 4, 6, 7]
num.push(-4)
console.log(num)
console.log(num.sort())
console.log(`O vetor tem ${num.length} posiçoes`)
console.log(num[0])
for (i = 0; i < num.length; i++) {
    console.log(`O elemento da posição ${i} é ${num[i]}`)
}