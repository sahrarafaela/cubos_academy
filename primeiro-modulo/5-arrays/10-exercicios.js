const numeros = [30, 56, 756, 54, 460, 4565];
let soma = 0;

//somando elementos do array
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);

numeros.forEach(function (indice) {
    soma += indice;
    //soma = soma + numeros[i]
})

console.log(soma);
