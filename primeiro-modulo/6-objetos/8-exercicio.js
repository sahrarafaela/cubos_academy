let produtos = [
    {
        nome: "mouse",
        precoUnitario: 9000,
        quantidade: 30
    },

    {
        nome: "teclado",
        precoUnitario: 12000,
        quantidade: 60
    },

    {
        nome: "headset",
        precoUnitario: 30000,
        quantidade: 20
    }
]
const cartao = {
    nomeDoCliente: "Sara Nascimento",
    idadeDoCliente: 24,
    produtos
};
cartao.idadeDoCliente = 23;


console.log(cartao.nomeDoCliente);
console.log(cartao.idadeDoCliente);
//imprimir nome do primeiro produto consumido
console.log(cartao.produtos[0].nome);
console.log(cartao.produtos[produtos.length - 1].precoUnitario);
