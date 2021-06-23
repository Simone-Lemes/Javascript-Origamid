// Tipos de dados
// Todos são dados primitivos exceto objetos
// Dados primitivos são dados imutáveis 

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// Typeof (mostra que tipo de dado é)
var nome = 'André';
console.log(typeof nome);
// retorna string

//String você pode somar uma string e assim concatenar as palavras.
var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var ano = '2018';
var mes = 8;
console.log(ano + mes);

//Você pode somar números com strings, o resultado final é sempre uma string.
 
var gol = 1;
var frase = 'Romário fez ' + gols + ' gols';
console.log(typeof frase);

var melhor = 'jogador';
var frase1 = "Esse é o \"melhor\"jogo";
console.log(frase1);

// Utilizando Template String
var gols = 1000;
var frase2 = 'Romário fez ' + gols + ' gols';
console.log(frase2);

var frase3 = `Romário fez ${gols * 3} gols`; 
console.log(frase3);






