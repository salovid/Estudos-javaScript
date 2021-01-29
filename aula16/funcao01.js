function parimpar(n) {
    if (n % 2 == 0) {
        return `O numero ${n} é par`
    } else {
        return `O numero ${n} é impar`
    }
}
let res = parimpar(6)
console.log(res)