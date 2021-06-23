//CONDICIONAIS IF E ELSE
//Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
var possuiCNH = true;
if(possuiCNH) {
  console.log('Possui CNH');
} else {
  console.log('Não possui CNH');
}
// retorna Possui CNH e não executa o else

//CONDICIONAIS ELSE IF
var possuiGraduacao = true;
var possuiDoutorado = false;
if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

// FALSY valores que retornam false
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``
//Esses valores retornam falso

// Truthy valores que retornam verdadeiro
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
//Esses valores retornam verdadeiros

// O operador ! (inverte a operação booleana) Ou seja, !true é igual a false e false é igual a true
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

// exemplo (!possuiGraduacao valor NÃO falso, mudou pra true)
if(!possuiGraduacao) {
  console.log('Não possui graduação');
}

//OPERADORES DE COMPARAÇÃO
//Vão sempre retornar um valor booleano (true, false)
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10'; // true
10 == 10; // true
10 === '10'; // false (pois um é string e o outro number)
10 === 10 // true
10 != 15 // true
10 != '10' // false (pois um é string e o outro number)
10 !== '10' // true

//exemplo
var x = 10;
console.log(x === 10);
//retorna true

//

















