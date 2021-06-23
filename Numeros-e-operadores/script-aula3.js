// ponto para decimal
var pi = 3.14; 

//Exponencial
// 20000000000 (o 10 significa quantos zeros irá acrescentar)
var exp = 2e10; 
var exp1 = 2e2;
var exp2 = 2e-2;
var exp3 = 2.5;
console.log(exp, exp1, exp2, exp3);

//operações
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50

//ao quadrado ou cubo
var expoente = 2 ** 4; // 16

//resto da divisão
var modulo = 14 % 5; // 4

//faz a operação sendo string
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200

// NaN (Not a Number) 
var divisao = 'Comprei 10' / 2; 
// Retorna NaN

//operadores aritméticos binários
//ordem começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//Parênteses para priorizar uma expressão (como na expressão matemática)
var total2 = (20 + 5) * 2; // 50

//operadores aritméticos unários (incremento +1 e decremento -1)
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

//O + e - tenta transformar o valor seguinte em número
//O - antes de um número torna ele negativo
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1









 






