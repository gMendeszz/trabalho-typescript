import readlineSync from 'readline-sync';

export function exercicio4() {
    console.log("Exercicio 4: Conversao de temperatura Celsius para Fahrenheit");

    const c = Number(readlineSync.question("Temperatura em Celsius: "));
    const f = (c * 9 / 5) + 32;

    console.log("Fahrenheit: " + f);
}
