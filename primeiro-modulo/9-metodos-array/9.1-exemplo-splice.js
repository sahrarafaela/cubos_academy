let array = ['a', 'b', 'c', 'd', 'e'];

// array.splice(1, 2, "f", "pode inserir mais", 3);
// console.log(array);

array.splice(1, 0, "f", "pode inserir mais", 3);
// console.log(array);

//array.push
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(array.length, 0, "f");
console.log(array);

//array.pop
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(array.length - 1, 1);
console.log(array);

//shift.shift
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(0, 1);
console.log(array);


//shift.unshift
array = ['a', 'b', 'c', 'd', 'e'];
array.splice(0, 0, "f")
console.log(array);