// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10
//               0   1   2  3  4....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosfiltrados = numeros.filter(valor => valor > 10);
console.log(numerosfiltrados);




// Retorne as pessoas que tem o nome com 5 letras ou mais 
// Retorne as pessoas com mais de 50 anos 
// Retorne as pessoas cujo nome termina com a 
const pessoas = [
    { nome: 'Caio', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];
const pessoaComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6);
const pessoaComMaisidade = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaComA = pessoas.filter(function(obj){
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);
