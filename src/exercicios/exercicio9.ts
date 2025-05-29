import readlineSync from 'readline-sync';

export function exercicio9() {
    console.log("Exercicio 9: Calculadora simples");

    const a = Number(readlineSync.question("Digite o primeiro numero: "));
    const operador = readlineSync.question("Digite o operador (+, -, *, /): ");
    const b = Number(readlineSync.question("Digite o segundo numero: "));

    let resultado: number;

    switch (operador) {
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case '*':
            resultado = a * b;
            break;
        case '/':
            if (b !== 0) {
                resultado = a / b;
            } else {
                console.log("Erro: divisao por zero nao e permitida.");
                return;
            }
            break;
        default:
            console.log("Operador invalido.");
            return;
    }

    console.log("Resultado: " + resultado);
}
