export class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibir(): void {
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
    }
}

export function exercicio11() {
    console.log("Exercicio 11: Classe Pessoa");

    const p = new Pessoa("Guilherme", 18);
    p.exibir();
}
