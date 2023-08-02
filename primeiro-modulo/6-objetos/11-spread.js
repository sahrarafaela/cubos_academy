//espalhar
// usa-se ... (3 pontinhos)

const pessoa = {
    nome: "Sara",
    altura: 1.62,
    idade: 24,
    cidade: "Uberlândia",
    profissao: "dev"

};

const endereco = {
    rua: "heheh",
    numero: "321",
    bairro: "barrão"
}

//para unir normalmente

const objetoFundido = {
    nome: pessoa.nome,
    idade: pessoa.idade,
    rua: endereco.rua
}

//usar isso com o spread operator
const objFudido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
}

console.log(objFudido);