// somando quantas letras as tem 

let palavra = 'saaaraaaaa';
let soma = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        soma += 1
    }
}
console.log(soma);