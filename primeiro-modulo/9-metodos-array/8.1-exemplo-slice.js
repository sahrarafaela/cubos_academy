function trocando(numero) {
    //Math.ceil arrendonda o número para cima
    //Math.round arrendonda o número
    const startIndex = Math.round(numero.length * 10 / 100);
    const endtIndex = Math.round(numero.length * 90 / 100);
    const fatia = dados.slice(startIndex, endtIndex)
    console.log(fatia);

}
let dados = [2, 3, 4, 5, 9, 10, 11, 12]
trocando(dados)