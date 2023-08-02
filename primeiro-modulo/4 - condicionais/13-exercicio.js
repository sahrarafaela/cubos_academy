const valorDoProduto = 100;
// const aVista = false;
const parcelas = 3;
const desconto = 0.10;

if (parcelas === 1) {
    console.log(`Você vai pagar com desconto de R$ ${valorDoProduto * desconto},00 totalizando R$ ${valorDoProduto - (valorDoProduto * desconto)},00 reais`);
} else {
    console.log(`Suas parcelas vão ficar ${parcelas}X de R$${(valorDoProduto / parcelas).toFixed(2)} reais`);
}