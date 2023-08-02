// Transforma uma string num array de strings menores, separando-a em todos os lugares onde encontrar o argumento text.

// exemplo:

const nomeCompleto = "Sara Rafaela da Silva Nascimento";
const transformandoEmArray = nomeCompleto.split(" ");
console.log(transformandoEmArray); // [ 'Sara', 'Rafaela', 'da', 'Silva', 'Nascimento' ]

// selecionando um item do array:
const nomeDoMeio = transformandoEmArray[3];
console.log(nomeDoMeio); //Silva