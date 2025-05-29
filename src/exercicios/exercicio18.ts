import * as readlineSync from 'readline-sync';

export function exercicio18() {
    console.log("Exercicio 18: Contar Palavras");

    const frase = readlineSync.question("Digite uma frase: ").trim();

    if (frase.length === 0) {
        console.log("Nenhuma palavra.");
    } else {
        const palavras = frase.split(/\s+/);
        console.log("Quantidade de palavras: " + palavras.length);
    }
}
