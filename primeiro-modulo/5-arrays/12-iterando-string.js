const palavras = 'Alemana';

let encontrado = false;

for (let letra of palavras) {
    if (letra === 'h') {
        console.log('tem a letra h');
        encontrado = true
        break;
    }
    // vai percorrer todas as letras // else{
    //     console.log('não tem h');
    // }
}

if (!encontrado) {
    console.log('não tem h');
}