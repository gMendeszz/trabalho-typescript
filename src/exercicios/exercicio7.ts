export function exercicio7() {
    console.log("Exercicio 7: Encontrar o maior numero em um array");
    console.log("98, 62, 21, 99, 76");
    const numeros = [98, 62, 21, 99, 76];
    let maior = numeros[0];

    for (const num of numeros) {
        if (num > maior) {
            maior = num;
        }
    }

    console.log("Maior numero: " + maior);
}
