import * as readlineSync from 'readline-sync';

export function exercicio15() {
    console.log("Exercicio 15: Calculadora de IMC");

    const peso = Number(readlineSync.question("Peso (kg): "));
    const altura = Number(readlineSync.question("Altura (m): "));

    const imc = peso / (altura * altura);
    console.log("IMC: " + imc.toFixed(2));

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        console.log("Peso normal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}
