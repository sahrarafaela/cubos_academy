// junta array em uma string

const opcoes = ["uma", "outra"];

let resultado = opcoes.join();
// console.log(resultado); //uma,outra

resultado = opcoes.join("");
// console.log(resultado); // umaoutra

resultado = opcoes.join(" ou ");;
console.log(resultado); // uma ou outra