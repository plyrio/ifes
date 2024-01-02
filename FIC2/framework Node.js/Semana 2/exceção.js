try {
    const resultado = divisaorder(10, 0);
     
    console.log(resultado);
} catch (error) {
    console.log("A operação" + error.message);
}

function divisaorder(a, b) {

    if ( b == 0) {
        throw new Error("Divisão por Zero não pode ser feita.");
    }
    return a / b;
}