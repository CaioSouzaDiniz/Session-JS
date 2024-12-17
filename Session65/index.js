//Dobre os números
//               0   1   2  3  4....
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosEmDobro = numeros.map(function(valor){
//     return valor * 2;
// });
// // console.log(numerosEmDobro);



//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
 const pessoas = [
    { nome: 'Caio', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];
const nomes = pessoas.map(function(obj){
    return obj.nome;
});
const idades = pessoas.map(function(obj){
    // delete obj.nome;
    return obj;
});

const comIds = pessoas.map(function(obj, indice){
    const newObjs = {...obj };
    newObjs.id = indice;
    return newObjs;
});

console.log(pessoas);
console.log(comIds);

