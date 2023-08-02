// preenche a string até atingir o tamanho

const digitos = 123345;
const trocando = String(digitos);

const preenchendoComStrings = trocando.padStart(20, "sara");

const preenchendoComStrings1 = trocando.padEnd(20, "sara");

console.log(preenchendoComStrings);
console.log(preenchendoComStrings1);