//Exercicio 1: Criar um array de números e imprima a soma dos valores.
let valores = [5, 10, 15];
let somaValores = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);
//Exercicio 2: Criar uma função que recebe um nome e retorna uma mensagem personalizada.
function mensagemPersonalizada(nome) {
    return `Olá, ${nome}! Bem-vindo a FIAP.`;
}
console.log(mensagemPersonalizada("Brendon"));
//Exercicio 3: Criar uma classe Carro com atributos marca, modelo e ano.
// Instancie um objeto e exiba suas informações.
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Honda", "Civic", 2019);
console.log(carro1.detalhes());
