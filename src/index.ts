import * as readlineSync from 'readline-sync';

import { exercicio1 } from './exercicios/exercicio1';
import { exercicio2 } from './exercicios/exercicio2';
import { exercicio3 } from './exercicios/exercicio3';
import { exercicio4 } from './exercicios/exercicio4';
import { exercicio5 } from './exercicios/exercicio5';
import { exercicio6 } from './exercicios/exercicio6';
import { exercicio7 } from './exercicios/exercicio7';
import { exercicio8 } from './exercicios/exercicio8';
import { exercicio9 } from './exercicios/exercicio9';
import { exercicio10 } from './exercicios/exercicio10';
import { exercicio11 } from './exercicios/exercicio11';
import { exercicio12 } from './exercicios/exercicio12';
import { exercicio13 } from './exercicios/exercicio13';
import { exercicio14 } from './exercicios/exercicio14';
import { exercicio15 } from './exercicios/exercicio15';
import { exercicio16 } from './exercicios/exercicio16';
import { exercicio17 } from './exercicios/exercicio17';
import { exercicio18 } from './exercicios/exercicio18';

function menu() {
    let opcao: number;
    do {
        console.log("\n==== MENU ====");
        console.log("1 - Exercício 1");
        console.log("2 - Exercício 2");
        console.log("3 - Exercício 3");
        console.log("4 - Exercício 4");
        console.log("5 - Exercício 5");
        console.log("6 - Exercício 6");
        console.log("7 - Exercício 7");
        console.log("8 - Exercício 8");
        console.log("9 - Exercício 9");
        console.log("10 - Exercício 10");
        console.log("11 - Exercício 11");
        console.log("12 - Exercício 12");
        console.log("13 - Exercício 13");
        console.log("14 - Exercício 14");
        console.log("15 - Exercício 15");
        console.log("16 - Exercício 16");
        console.log("17 - Exercício 17");
        console.log("18 - Exercício 18");
        console.log("0 - Sair");

        opcao = Number(readlineSync.question("Escolha uma opcao: "));

        switch (opcao) {
            case 1: exercicio1(); break;
            case 2: exercicio2(); break;
            case 3: exercicio3(); break;
            case 4: exercicio4(); break;
            case 5: exercicio5(); break;
            case 6: exercicio6(); break;
            case 7: exercicio7(); break;
            case 8: exercicio8(); break;
            case 9: exercicio9(); break;
            case 10: exercicio10(); break;
            case 11: exercicio11(); break;
            case 12: exercicio12(); break;
            case 13: exercicio13(); break;
            case 14: exercicio14(); break;
            case 15: exercicio15(); break;
            case 16: exercicio16(); break;
            case 17: exercicio17(); break;
            case 18: exercicio18(); break;
            case 0:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }

        if (opcao !== 0) {
            readlineSync.question("Pressione ENTER para voltar ao menu...");
        }
    } while (opcao !== 0);
}

menu();
