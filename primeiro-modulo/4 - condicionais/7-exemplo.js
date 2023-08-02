const temIngresso = true;
const censura = 16;
const idade = 15;


if (temIngresso) {
    if (idade >= censura) {
        console.log('pode entrar');
    }
} else {
    console.log("barrada");
}

if (temIngresso && idade >= censura) {
    console.log('pode entrar');
} else {
    console.log("barrada");
}