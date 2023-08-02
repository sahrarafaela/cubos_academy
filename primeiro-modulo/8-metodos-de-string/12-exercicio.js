const meuNome = "sara rafaela da silva nascimento";

const arrayDeNomex = meuNome.split(" ");


let nomeFormatado = "";
for (let item of arrayDeNomex) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);
    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + ' '
}
console.log(nomeFormatado.trim());