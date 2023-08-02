const valorDoProduto = 100;
// const aVista = false;
const parcelas = 0;
const desconto = 0.10;

if (parcelas === 1) {
    console.log(`Você vai pagar com desconto de R$ ${valorDoProduto * desconto},00 totalizando R$ ${valorDoProduto - (valorDoProduto * desconto)},00 reais`);
} else if (parcelas >= 2 && parcelas <= 6) {
    console.log(`Suas parcelas vão ficar ${parcelas}X de R$${(valorDoProduto / parcelas).toFixed(2)} reais`);
} else if (parcelas >= 7 && parcelas <= 12) {
    const juros = 0.01;
    const montante = valorDoProduto * ((1 + juros) ** parcelas)
    console.log(`Suas parcelas vão ficar ${parcelas}X de R$${(montante / parcelas).toFixed(2)} reais totalizando um valor de ${(montante).toFixed(2)} reais `);
} else {
    console.log("Não será possível parcelar");
}