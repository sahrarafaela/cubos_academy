const frase = "eu estou aprendendo a programar na cubos academy";


// console.log(frase.indexOf("cubos"));

const email = "sara@sara.com";

const indexArroba = email.indexOf("@")
let taIncluso = email.indexOf(".", indexArroba);


if (indexArroba < taIncluso) {

    console.log("ok");
} else {
    console.log("email inválido");
}