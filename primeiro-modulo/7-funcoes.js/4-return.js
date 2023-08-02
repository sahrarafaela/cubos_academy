function verificarMaioridade(idade) {
    if (idade >= 18) {
        return `maior de idade`;
    } else {
        return `menor de idade`;
    }
}
let valorVerificado = verificarMaioridade(10);

console.log(verificarMaioridade(18));
console.log(valorVerificado);