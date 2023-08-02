const pessoa = {
    nome: "Sara",
    idade: 24,
    profissao: "dev"
};
const pessoa2 = {
    nome: "Gabriel",
    idade: 27,
    profissao: "professor"
};
const pessoa3 = {
    nome: "Patricia",
    idade: 66,
    profissao: "aposentado"
};

function mostrandoPessoas(pessoa) {
    if (pessoa.idade < 21) {
        return `Sou ${pessoa.nome} e sou jovem tenho ${pessoa.idade} anos`;
    } else if (pessoa.idade < 65) {
        return `Sou ${pessoa.nome} e sou adulto(a) tenho ${pessoa.idade} anos`;
    } else {
        return `sou ${pessoa.nome} e sou idoso(a) tenho ${pessoa.idade} anos`;
    }
}
console.log(mostrandoPessoas(pessoa));
console.log(mostrandoPessoas(pessoa2));
console.log(mostrandoPessoas(pessoa3));