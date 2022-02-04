/*
for(let i = 0; i < 100; i = i + 3){
    console.log(`A soma de i com 2 é: ${i + 2}`);
}
*/
let nome = 'Lucas';
for(let i = 0; i < 10; i++){

    if (i==3){
        nome = 'Teste';
    }

    if (i == 5 && nome == 'Teste'){
        console.log('O nome é Teste, pode parar.');
        break;
    }

    console.log(i);
}