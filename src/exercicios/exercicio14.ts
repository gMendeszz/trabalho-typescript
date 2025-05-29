import * as readlineSync from 'readline-sync';

export function exercicio14() {
    console.log("Exercicio 14: Tabuada de um numero");

    const num = Number(readlineSync.question("Digite um numero: "));

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
