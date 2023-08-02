const imprimir = () => {
    console.log("olá, alunos e alunas");
    //parar o setInterval
    clearInterval(interval)
}

const interval = setInterval(imprimir, 2000)

//outros exemplos

let numero = 10;

let contador = setInterval(() => {
    console.log(numero);
    numero--;
    if (numero === 0) {
        console.log("booooom");
        clearInterval(contador)
    }
}, 1000)
