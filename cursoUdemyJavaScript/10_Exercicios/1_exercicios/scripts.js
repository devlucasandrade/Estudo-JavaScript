//Exercicios
console.log("-- Exercicio 01 --")

const validarMaiuscula = /[A-Z]/

console.log(validarMaiuscula.test("teste"))
console.log(validarMaiuscula.test("123"))
console.log(validarMaiuscula.test("TESTANDO"))


//Exercicios
console.log("\n-- Exercicio 02 --")

const validarID = /\d+ID\b/

console.log(validarID.test("3211546ID"))
console.log(validarID.test("123ID123"))
console.log(validarID.test("asd"))

//Exercicios
console.log("\n-- Exercicio 03 --")

const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(validarMarca.test("Marca: Nike"))
console.log(validarMarca.test("Marca: Asics"))
console.log(validarMarca.test("Adidas"))


//Exercicios
console.log("\n-- Exercicio 04 --")

const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validaIP.test("127.0.0.1"))
console.log(validaIP.test("8.8.8.8"))
console.log(validaIP.test("255.255.255.0"))
