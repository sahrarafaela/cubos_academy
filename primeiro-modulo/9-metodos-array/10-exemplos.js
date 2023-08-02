// obj quando é modificado algum dos itens todo o obj vai ser modificado 
//ex:

let obj1 = {
    prop: 5
};
let obj2 = obj1

obj1.prop = 30;
console.log(obj1); // 30
console.log(obj2); //30