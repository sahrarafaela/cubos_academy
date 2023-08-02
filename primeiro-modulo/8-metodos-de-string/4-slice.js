//fatia

const cidade = "Salvador-BA";


let estado = cidade.slice(-2);

//não é um código robusto
let estado2 = cidade.slice(9);

//outra forma de fazer

let penultimoIndex = cidade.length - 2;
let estado3 = cidade.slice(penultimoIndex);
console.log(penultimoIndex);
console.log(estado3);
