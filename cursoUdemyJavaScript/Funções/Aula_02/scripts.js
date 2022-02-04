//imprimir na tela
function imprimirNoConsole(){
    console.log("Olá mundo!");
}

imprimirNoConsole();

//imprimir um numero
function imprimirUmNumero(num){
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);

//constante imprimindo funcao
const numeroAleatorio = function(){
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
numeroAleatorio();