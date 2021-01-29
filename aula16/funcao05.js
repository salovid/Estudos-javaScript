function fatorial(n) {
    let fat = 1
    if (n > 1) {
        fat = n * fatorial(n - 1)
        return fat
    } else if (n == 1 || n == 0) {
        return 1

    } else {
        return 'Não é possível calcular o fatorial'
    }
}

res = fatorial(2)
console.log(res)