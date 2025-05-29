import * as readlineSync from 'readline-sync';

export function exercicio17() {
    console.log("Exercicio 17: Jogo de Adivinhacao");

    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativa: number;

    console.log("Tente adivinhar o número entre 1 e 100!");

    do {
        tentativa = Number(readlineSync.question("Seu palpite: "));

        if (tentativa < numeroSecreto) {
            console.log("Maior!");
        } else if (tentativa > numeroSecreto) {
            console.log("Menor!");
        } else {
            console.log("Parabens! Voce acertou.");
        }
    } while (tentativa !== numeroSecreto);
}
