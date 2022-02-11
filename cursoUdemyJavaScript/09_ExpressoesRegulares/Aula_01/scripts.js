//Expressões Regulares
console.log("-- Expressões Regulares 01 --");

const reg1 = new RegExp('bola')

console.log(reg1.test("Tem bola?"))
console.log(reg1.test("Não tem"))

const reg2 = /bola/

console.log(reg2.test("Tem bola?"))
console.log(reg2.test("Não tem"))


//Expressões Regulares
console.log("\n-- Expressões Regulares 02 --");

const pontoRegex = /./

