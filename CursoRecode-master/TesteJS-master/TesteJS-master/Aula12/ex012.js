let agora = new Date();
let hora = agora.getHours();
let minutos =  agora.getMinutes();

console.log(`Agora são exatamente ${hora}:${minutos} horas.`);

if(hora <12) {
    console.log('Bom dia!')
} else if (hora <18) {
    console.log('Boa Tarde!')
}else {
    console.log('Boa noite!')
}