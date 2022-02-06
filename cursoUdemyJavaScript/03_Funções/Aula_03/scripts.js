//Escopo
console.log("-- Escopo geral --")
let x = 10;
if(x > 5){
    let x = 21;
    console.log(x);
}
console.log(x);

//Escopo aninhado
console.log("-- Escopo aninhado --")
let a = 10;
function multiplicarDoisValores(x,y){
    let a = x * y;
    if(a > 10){
        let a = 0;
        a ++;
        console.log('Declaração if: ' + a);
    }
    console.log('Declaração função: ' + a);
}
console.log('Declaração geral: ' + a);

multiplicarDoisValores(2,4);
multiplicarDoisValores(3,7);