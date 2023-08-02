function inverterString(texto) {
    const arayDeLetras = texto.split("");
    arayDeLetras.reverse();
    let textoInvertido = "";
    for (let letra of arayDeLetras) {
        textoInvertido += letra;
    }
    console.log(textoInvertido);


}

inverterString("cubos academy");