const pessoa = {
    //aqui cria propiedades

    nome: "Sara",
    altura: 1.62,
    idade: 24,
    cidade: "Uberlândia",
    profissao: "dev"

};
//separando
// const nome = pessoa.nome;
// const idade = pessoa.idade;

//usando a destruturação

const { nome, idade, ...outros } = pessoa;
console.log(outros);