// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (map)
//               0   1   2  3  4....
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor,){
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// });
// console.log(total);




// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Caio', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 470},
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);