const pessoa = {
    //aqui cria propiedades

    nome: "Sara",
    altura: 1.62,
    peso: 60

};
console.log(`meu nome é ${pessoa.nome} tenho ${pessoa.altura}cm e peso ${pessoa.peso}`);

//trocando o nome mesma coisa de usar o . (ponto)
pessoa['nome'] = "Rafaela";
console.log(`meu nome é ${pessoa.nome}`);