function determinaIdade(idade) {
    if (idade <= 21) {
        return `jovem`;
    } else if (idade <= 65) {
        return `adulto(a)`;
    } else {
        return `idoso(a)`;
    }
}

let determinarFuncao = determinaIdade(18)
console.log(determinaIdade(21));

console.log(determinarFuncao);