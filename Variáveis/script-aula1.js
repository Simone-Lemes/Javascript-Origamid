var nome = 'Simone';
let idade ='33';
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

//As variáveis evitam repetições

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(preco, totalComprado, precoTotal);

var sobrenome = 'Silva',
cidade = 'Sorocaba';

console.log(sobrenome, cidade);

//Variável sem valor definido

var semDefinir;
console.log(semDefinir);

//Hoisting
console.log(comida);
comida = 'Pizza';
console.log(comida);

//Diferenças entre var, let e const
//let e var podem mudar o valor
//Const não é possível modificar 

var idadePessoa = 28;
idade = 29;

let precoProduto = 50;
precoProduto = 25;

const possuiRedeSocial = true;
possuiRedeSocial = false;
//Retorna um erro


