function inverterString(texto) {
    const arayDeLetras = texto.split("");
    arayDeLetras.reverse();
    let textoInvertido = arayDeLetras.join("");

    return textoInvertido

}

console.log(inverterString("cubos academy"));