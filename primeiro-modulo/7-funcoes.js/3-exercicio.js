const pessoas = {
    nome: "sara",
    idade: 24,
    profissao: "dev",
    altura: 1.62
};

function pessoa(dados) {
    console.log(`Olá! Meu nome é ${dados.nome} sou um jovem de ${dados.idade} anos, ${dados.altura}m de altura e sou ${dados.profissao}`);
}

pessoa(pessoas)