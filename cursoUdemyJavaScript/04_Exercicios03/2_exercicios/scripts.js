//Exercicios 05
console.log("-- Exercício 05 --");

function verificaIdade(idade){
    if(idade >= 18){
        console.log("Matrícula liberada.");
    } else{
        console.log("Não pode se matricular.");
    }
}
verificaIdade(17);
verificaIdade(20);
verificaIdade(60);

//Exercicios 06
console.log("-- Exercício 06 --");

function verificaTipoDado(dado){
    if(typeof dado == 'string'){
        console.log("É String.");
    } else if(typeof dado == 'number'){
        console.log("É number.");
    } else if (typeof dado == 'boolean'){
        console.log("É boolean.");
    }
}

verificaTipoDado(true);
verificaTipoDado(23);
verificaTipoDado("texto");

//Exercicios 07
console.log("-- Exercício 07 --");

function numPositivo(numNegativo){
    return Math.abs(numNegativo);
}
console.log(numPositivo(-13));
console.log(numPositivo(5));
console.log(numPositivo(-2.5));