//Exercício 1
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

//Criar uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
//Depois, implemente essa função e teste com diferentes valores.

interface Multiplicacao{
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 5 x 4:", multiplicar(5, 4)); // 20
console.log("Multiplicação 8 x 2:", multiplicar(8, 2)); // 16