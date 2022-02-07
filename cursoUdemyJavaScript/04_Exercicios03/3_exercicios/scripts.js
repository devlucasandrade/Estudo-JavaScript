//Exercicios 08
console.log("-- Exercício 08 --");

function contaTexto(texto){
    if(texto.length > 10){
        console.log("Texto muito longo.");
    } else{
        console.log("Texto dentro do limite.");
    }
    console.log(texto.length);
}
contaTexto("Texto muito muito muito");
contaTexto("Pequeno");

//Exercicios 09
console.log("-- Exercício 09 --");

function potencia(a,b){
    return Math.pow(a,b);
}
console.log(potencia(2,2));
console.log(potencia(3,2));
console.log(potencia(5,2));

//Exercicios 10
console.log("-- Exercício 10 --");

function imprimePar(num){
    for(let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}
imprimePar(10);
imprimePar(4);
imprimePar(20);