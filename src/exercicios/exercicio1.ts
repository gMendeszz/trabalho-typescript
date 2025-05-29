import readlineSync from 'readline-sync';

export function exercicio1() {
    console.log("Exercício 1: Soma de dois números");

    const numero1 = Number(readlineSync.question("Digite o primeiro numero: "));
    const numero2 = Number(readlineSync.question("Digite o segundo numero: "));

    const soma = numero1 + numero2;

    console.log(`A soma dos dois números é: ${soma}`);
}
