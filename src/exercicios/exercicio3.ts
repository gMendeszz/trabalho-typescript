import readlineSync from 'readline-sync';

export function exercicio3() {
    console.log("Exercício 3: Cálculo da Média de 3 Notas");

    const n1 = Number(readlineSync.question("Nota 1: "));
    const n2 = Number(readlineSync.question("Nota 2: "));
    const n3 = Number(readlineSync.question("Nota 3: "));

    const media = (n1 + n2 + n3) / 3;

    console.log(`Média: ${media}`);
}
