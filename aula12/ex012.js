//Cumprimentos -Saudações
var agora1 = new Date()
var hora = agora1.getHours()
var agora2 = new Date()
var minuto = agora2.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}