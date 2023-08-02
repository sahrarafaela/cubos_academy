// const pessoa = {
//     nome: "Sara Nascimento",
//     idade: 24,
//     altura: 1.62,
//     temCNH: false,
//     apelido: ["Saroca", "Saah"],
//     carro: null
// };

//novo exemplo 
// adicionando novas propriedades

// const pessoa = {
//     nome: "Sara Nascimento",
//     idade: 24,
//     altura: 1.62,
//     temCNH: false,
//     apelido: ["Saroca", "Saah"],
//     carro: {
//         marca: "Toyota",
//         modelo: "Etios",
//         ano: 2020,
//         potencia: 80
//     }
// };

//ATALHOS:


// outro exemplo é adicionar as propiedades usando uma variavel
const carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
};

const pessoa = {
    nome: "Sara Nascimento",
    idade: 24,
    altura: 1.62,
    temCNH: false,
    apelido: ["Saroca", "Saah"],
    //PODEMOS SUBSTITUIR O carro: carro por apenas carro mas funciona apenas se tiver uma variável com o mesmo nome
    carro: carro
};


console.log(pessoa);
console.log(pessoa.carro.marca);