//Orientação a Objetos - Prototypes
console.log("-- Prototypes 01 --");

const pessoa = {
    maos: 2,
    pes: 2,
    cabelo: true,
}
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));


//Orientação a Objetos - Prototypes
console.log("\n-- Prototypes 02 --");

const carro = {
    rodas: 4,
    portas: 4,
    motor: 2.0,
    nome: "Jetta",
}
console.log(Object.getPrototypeOf(carro));
console.log(Object.getPrototypeOf(carro) === Object.prototype);

console.log(carro.hasOwnProperty('rodas'));

const carroNovo = Object.create(carro);
console.log(carroNovo.rodas);
