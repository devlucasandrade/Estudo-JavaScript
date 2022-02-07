//Exercicios
console.log("-- Exercicio 05 --");

let onibus = {
    rodas: 8,
    limite: 40,
    portas: 2,
};
console.log(onibus);

delete onibus.rodas;
console.log(onibus.rodas);

onibus.janelas = 20;
console.log(onibus);
console.log(onibus.janelas);

//Exercicios
console.log("-- Exercicio 06 --");

let nomes = ["Lucas","Débora","Any","Djalma","Luzia"];
if(nomes.includes("Lucas")){
    console.log("Meu nome está no bolo.");
} else{
    console.log("Não encontrado.");
}

//Exercicios
console.log("-- Exercicio 07 --");

let a1 = [0,1,3,5,7,9];
let a2 = [2,4,6];

function verificarElementos(arr){
    if(arr.length >= 5){
        console.log("Muitos elementos: " + arr);
    }else{
        console.log("Poucos elementos: " + arr);
    }
}
verificarElementos(a1);
verificarElementos(a2);
