function trocandoValores(original, text, newText) {

    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText)
    }
    return original
}

let numero = "132,4894,5645"
console.log(trocandoValores(numero, ",", "."));
