const pessoa3 = {
    nome: "Patricia",
    idade: 66,
    profissao: "aposentado"
};

function determinaIdade(idade) {
    if (idade <= 21) {
        return `jovem`;
    } else if (idade <= 65) {
        return `adulto(a)`;
    } else {
        return `idoso(a)`;
    }
}

function mostrandoPessoas(pessoa) {
    const faixaEtaria = determinaIdade(pessoa.idade);
    console.log(`Sou ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}`);
}

mostrandoPessoas(pessoa3);