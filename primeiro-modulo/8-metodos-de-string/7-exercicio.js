let numero = "1,300,000";



while (numero !== numero.replace(",", ".")) {
    numero = numero.replace(",", ".");
}

console.log(numero);