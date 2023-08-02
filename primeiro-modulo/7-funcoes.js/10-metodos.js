// metodo é uma função que está dentro de um objeto
const pessoa3 = {
    nome: "Patricia",
    idade: 66,
    profissao: "aposentado",

    mostrandoPessoas: function () {
        const faixaEtaria = this.determinaIdade(this.idade);
        console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}`);
    },

    determinaIdade: function () {
        if (this.idade <= 21) {
            return `jovem`;
        } else if (this.idade <= 65) {
            return `adulto(a)`;
        } else {
            return `idoso(a)`;
        }
    }
};

pessoa3.mostrandoPessoas()