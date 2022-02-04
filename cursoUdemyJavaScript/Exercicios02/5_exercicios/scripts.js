console.log("Exercício 10:");
//Exercicio 10
let velocidade = 80;

console.log("Um Celta e um carro Pica, os dois a 80km/h: - Qual o mais rápido?");

if (velocidade > 80){
    console.log("Velocidade acima do permitido! MULTADOS!");
} else {
    console.log("Nenhum dois levou multa.")
}

console.log("\nExercício 11:");

// Exercicio 11
let idade = 18;
let cnh = true;

if (idade >= 18 && cnh == true){
    console.log("Liberado para dirigir.");
} else if (idade >= 18 && cnh == false){
    console.log("Não pode dirigir, não possui CNH.");
} else {
    console.log("Não possui idade para dirigir.")
}