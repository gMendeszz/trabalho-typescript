import readlineSync from 'readline-sync';

export function exercicio6() {
    console.log("Exercicio 6: Ler 5 numeros");

    const numeros: number[] = [];

    for (let i = 0; i < 5; i++) {
        const input = readlineSync.question(`Numero ${i + 1}: `);
        const num = Number(input);
        if (isNaN(num)) {
            console.log("Entrada invalida, por favor digite um numero.");
            i--;
        } else {
            numeros.push(num);
        }
    }

    console.log("Numeros digitados:");
    for (const num of numeros) {
        console.log(num);
    }
}
