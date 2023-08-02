const pessoa = {
    nome: "Sara Nascimento",
    idade: 24,
    altura: 1.62,
    temCNH: false,
    apelido: ["Saroca", "Saah"]
};


if (pessoa.temCNH) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, possui CNH e os seguintes apelidos:`);
} else {

    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, não possui CNH e os seguintes apelidos:  `);
}

for (let apelido of pessoa.apelido) {
    console.log(` - ${apelido}`);
}