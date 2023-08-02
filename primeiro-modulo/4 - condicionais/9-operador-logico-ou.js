const ingresso = true;
const censura = 16;
const idade = 14;
const pais = true;

if (ingresso) {
    if (idade >= censura || pais) {
        console.log('pode entrar');
    } else {
        console.log('barrado');
    }
} else {
    console.log('barrado');
}