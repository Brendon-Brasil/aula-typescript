//Exercício 1:
//Criar uma interface chamada Carro, que contenha as propriedades: marca, modelo, ano e motor(opcional)
//Em seguida, criar um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.

interface Carroo{
    marca: String;
    modelo: String;
    ano: number;
    motor?: String;
}
const meuCarro: Carroo = {
    marca: "Honda",
    modelo: "CRV",
    ano: 2024,
}
console.log("Meu carro: ", meuCarro);

//Exercicio 2:
//Criar uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
//Depois, implemente essa função e teste com diferentes valores.

interface Multiplicacao{
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 5 x 4:", multiplicar(5, 4)); // 20
console.log("Multiplicação 8 x 2:", multiplicar(8, 2)); // 16

//Exercicio 3:
//Criar uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
//Testar a função com um array de números e um array de strings.

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["Pão de Queijo", "é", "bom"];
console.log("Array invertido (números):", inverterArray(numeros)); // [5, 4, 3, 2, 1]
console.log("Array invertido (palavras):", inverterArray(palavras)); // ["bom", "é", "Pão de Queijo"]

//Exercicio 4:
//Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
//Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Brendon", email: "Brendon@email.com" });
repo.salvar({ nome: "Java", email: "Java@email.com" });
console.log("Lista de usuários:", repo.obterTodos());

//Exercicio 5:
//Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
//Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e imprime uma mensagem no console dependendo do valor passado.

type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação executada com exito? ${resposta ? "Sim" : "Não"}`);
    }
}
processarResposta("Os dados foram processados com sucesso!");
processarResposta(true);
processarResposta(false);

//Exercicio 6:
//Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
//Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.

type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Brendon",
    curso: "Ánalise e Desenvolvimento de Sistemas",
    empresa: "Ítau",
    cargo: "Desenvolvedor Júnior"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);