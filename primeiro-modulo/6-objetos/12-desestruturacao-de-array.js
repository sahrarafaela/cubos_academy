const arrays = [1, 2, 3, 4, 5, 6];

const a = arrays[0];
const b = arrays[1];

//usar a desestruturação
// const [c, ...resto, d] = arrays; // não funciona
const [c, d, ...resto] = arrays;
console.log(c, d);
console.log(resto);
