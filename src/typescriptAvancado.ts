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