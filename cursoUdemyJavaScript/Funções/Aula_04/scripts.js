//Arrow function
console.log("-- Arrow function --")
let consoleTeste = () => {
    console.log("Olá Mundo!");
}

consoleTeste();
let soma = (a,b) => {
    return (a + b);
}
console.log(soma(10,1));

//Arrow function 2
console.log("-- Arrow function 2 --")

const multiplicarDois = (x) => {
    return x * x;
}
console.log(multiplicarDois(2));

const multiplicarDois2 = (x) => x * x;
console.log(multiplicarDois2(4));