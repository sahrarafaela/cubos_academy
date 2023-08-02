const pessoa = {
    nome: "Sara Nascimento",
    idade: 24,
    altura: 1.62,
    temCNH: false,
    apelido: ["Saroca", "Saah"]
};

//ficar mais prático
let textoCNH = (pessoa.temCNH ? "possui CNH" : "não possui CNH");

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura} de altura, ${textoCNH} e os seguintes apelidos:`);

for (let apelido of pessoa.apelido) {
    console.log(`- ${apelido}`);
}