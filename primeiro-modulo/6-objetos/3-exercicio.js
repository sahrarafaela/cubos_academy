const pessoa = {
    nome: "Sara Nascimento",
    idade: 24,
    altura: 1.62,
    temCNH: false,
    apelido: ["Saroca", "Saah"]
};


if (pessoa.temCNH) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, possui CNH e os seguintes apelidos:
    - ${pessoa.apelido[0]} 
    - ${pessoa.apelido[1]}`);
} else {

    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, não possui CNH e os seguintes apelidos: 
    - ${pessoa.apelido[0]} 
    - ${pessoa.apelido[1]}`);
}

// outro jeito legal de fazer
let textoCNH = "";
if (pessoa.temCNH) {
    textoCNH = "possui CNH"
} else {
    textoCNH = "não possui CNH"
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, ${textoCNH} e os seguintes apelidos:
- ${pessoa.apelido[0]} 
- ${pessoa.apelido[1]}`);