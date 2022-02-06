//Exercicios 01
console.log("-- Exercício 01 --");

function helloWorld(){
    console.log("Hello World!");
}
helloWorld();

//Exercício 02
console.log("-- Exercício 02 --");

function informaIdade(idade){
    console.log(`Você tem ${idade} anos.`)
}
informaIdade(12);
informaIdade(19);
informaIdade(41);

//Exercício 03
console.log("-- Exercício 03 --");

function soma(y,x){
    return x + y;
}
console.log(soma(10,2));
console.log(soma(1,2));
console.log(soma(3,2));

//Exercício 04
console.log("-- Exercício 04 --");

function numeroAleatorio(num){
    return Math.floor(Math.random() * num) + 1;
}
numeroAleatorio(2);
numeroAleatorio(10);