const numbers = [10, 6, 8, 19, 18, 20];

console.log(numbers.indexOf(8, 1));
// vai rewtornar que o 8 está no index 2

// procurar o 8 em todo o array
console.log(numbers.indexOf(8));


// outros exemplos usando filter e indexOf

let filtro = "a"
const frutas = ["pera", "maça", "BANANA", "morg"];
let frutasFiltradas = frutas.filter((fruit) => {
    if (fruit.indexOf(filtro) !== -1) {
        return fruit
    }
})

console.log(frutasFiltradas);