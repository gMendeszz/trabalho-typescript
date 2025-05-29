interface Veiculo {
    acelerar(): void;
    frear(): void;
}

class Carro implements Veiculo {
    acelerar(): void {
        console.log("O carro esta acelerando...");
    }

    frear(): void {
        console.log("O carro esta freando...");
    }
}

export function exercicio13() {
    console.log("Exercicio 13: Interface Veiculo e classe Carro");

    const meuCarro = new Carro();
    meuCarro.acelerar();
    meuCarro.frear();
}
