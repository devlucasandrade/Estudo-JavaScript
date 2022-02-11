/*
console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].innerText)
*/
/*
console.log(document.getElementsByTagName('h1'))
console.log(document.getElementsByTagName('p'))
console.log(document.getElementsByTagName('li'))
*/
/*
console.log(document.getElementById('p1'))
console.log(document.querySelector('footer'))
*/

let novoElemento = document.createElement("p")
let elementoAlvo = document.querySelector("#titulo-principal")
let elementoPai = document.querySelector("#container-principal")

elementoPai.insertBefore(novoElemento, elementoAlvo)