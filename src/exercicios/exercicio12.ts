class Pessoa {
    protected nome: string;
    protected idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibir(): void {
        console.log("Nome: " + this.nome);
        console.log("Idade: " + this.idade);
    }
}

class Aluno extends Pessoa {
    private matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula;
    }

    exibir(): void {
        super.exibir();
        console.log("Matricula: " + this.matricula);
    }
}

export function exercicio12() {
    console.log("Exercicio 12: Classe Pessoa com heranca (Aluno)");

    const aluno = new Aluno("Guilherme", 18, "999");
    aluno.exibir();
}
