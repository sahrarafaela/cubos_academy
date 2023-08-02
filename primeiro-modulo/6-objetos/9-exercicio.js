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
let soma = 0;
for (let valores of produtos) {
    soma += valores.precoUnitario * valores.quantidade
}
let transformandoEmCentavos = (soma / 100).toFixed(2);

console.log(`Sr(a), ${cartao.nomeDoCliente}, o valor que você deverá pagar é R$ ${transformandoEmCentavos} reais`);