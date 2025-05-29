export function exercicio10() {
    console.log("Exercicio 10: Ordenar um array");

    const numeros = [97, 21, 29, 99, 77];

    numeros.sort((a, b) => a - b);

    console.log("Array ordenado:");
    for (const n of numeros) {
        process.stdout.write(n + " ");
    }
    console.log();
}
