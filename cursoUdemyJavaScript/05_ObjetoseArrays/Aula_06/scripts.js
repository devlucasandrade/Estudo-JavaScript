//metodos de array - slice
console.log("-- metodos de array - slice --");

let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5));
console.log(nums.slice(4,6));

console.log(nums.slice(4));
console.log(nums.slice(-4));

console.log(nums.slice(4,-2));


//metodos de array - forEach
console.log("-- metodos de array - forEach --");

let nomes = ["Lucas","Débora","Any","Mariazinha"];

nomes.forEach(nome => {
    console.log("O nome é: " + nome);
});


//metodos de array - includes
console.log("-- metodos de array - includes --");

let carros = ["Fusca","Gol","Palio","Corsa","Carro Pica"];

console.log(carros.includes("Fusca"));
console.log(carros.includes("Pica"));