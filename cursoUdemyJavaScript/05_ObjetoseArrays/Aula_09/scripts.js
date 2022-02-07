//rest operator
console.log("-- rest operator --");

let num1 = 1;
let num2 = 3;
let num3 = 5;
let num4 = 7;

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
imprimirNumeros(num1,num2,num3);
console.log("---");
/*
imprimirNumeros(num3,num2,num4);
console.log("---");
imprimirNumeros(2,3,5,6,8,9,4,5);
console.log("---");
*/

//destructuring
console.log("-- destructuring --");

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: 2.0,
}

const {rodas: vRodas, portas: vPortas, tetosolar: vTetosolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vTetosolar);

//destructuring arrays
console.log("-- destructuring arrays--");

let nums = [2,4,6,8];

let [n1,n2,n3,n4] = nums;

console.log(n1);
console.log(n3);