function imprimirData(data, mes, ano) {
    const diaFormatado = String(data).padStart(2, "0");
    const mesFormatado = String(mes).padStart(2, "0");
    const anoFormatado = String(ano);

    console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`);
}

imprimirData(3, 2, 1999)
