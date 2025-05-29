import * as readlineSync from 'readline-sync';

export function exercicio16() {
    console.log("Exercicio 16: Validador de Senha");

    const senha = readlineSync.question("Digite a senha: ").trim();

    const tamanho = senha.length >= 8;
    const maiuscula = /[A-Z]/.test(senha);
    const minuscula = /[a-z]/.test(senha);
    const numero = /[0-9]/.test(senha);
    const especial = /[!@#$%^&*(),.?":{}|<>_\-\[\]\\\/~`+=;']/g.test(senha);

    if (tamanho && maiuscula && minuscula && numero && especial) {
        console.log("Senha válida.");
    } else {
        console.log("Senha inválida. A senha deve conter pelo menos 8 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais.");
    }
}
