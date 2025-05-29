import readlineSync from 'readline-sync';

export function exercicio8() {
    console.log("Exercicio 8: Contar vogais em uma frase");

    const frase = readlineSync.question("Digite uma frase: ").toLowerCase();
    let contador = 0;

    for (const c of frase) {
        if ("aeiou".indexOf(c) !== -1) {
            contador++;
        }
    }

    console.log("Quantidade de vogais: " + contador);
}
