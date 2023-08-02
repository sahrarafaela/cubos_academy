const nomes = ["sara", "rafaela", "da", "silva", "nascimento"];

console.log(nomes.includes("sara"));

// exemplo com dados

const people = [
    { id: 11, name: "Adamastor", age: 23, group: "editor" },
    { id: 47, name: "Joana", age: 28, group: "user" },
    { id: 85, name: "Mauricio", age: 34, group: "editor" },
    { id: 97, name: "Lalau", age: 74, group: "admin" }
]

const filterUsers = people.filter(p => p.name.includes("au"))
console.log(filterUsers);