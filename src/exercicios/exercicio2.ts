import readlineSync from 'readline-sync';

export function exercicio2() {
    console.log("Exercício 2: Par ou Ímpar");

    const num = Number(readlineSync.question("Digite um numero: "));

    if (num % 2 === 0) {
        console.log("Número par");
    } else {
        console.log("Número ímpar");
    }
}
