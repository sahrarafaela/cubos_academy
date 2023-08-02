//serve para (inserir), (tirar) , (inserir e tirar)

const lista = ["a", "b", "c", "d", "e"];
let teste = lista.length

/// onde vai começar / quantos vou remover / qual vou inserir
lista.splice(teste, 0, "f");
console.log(lista); //[ 'a', 'f', 'd', 'a' ]