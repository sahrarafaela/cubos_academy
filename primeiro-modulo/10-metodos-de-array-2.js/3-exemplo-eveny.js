const frutas = ['abacaxi', 'manga', 'melancia'];

const verificacao = frutas.every((elementoAtual) => {
    return elementoAtual !== "banana";
})

// console.log(verificacao);

const numbers = [1, 2, 3, 4, 5];

const resultado = numbers.every((elementoAtual) => {
    return elementoAtual < 6;
})
console.log(resultado);