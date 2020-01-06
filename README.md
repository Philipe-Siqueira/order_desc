# order_desc

* Author: Philipe Siqueira
* Versão 1.0
* Descrição: criar uma função que possa pegar qualquer número inteiro não negativo 
* como argumento e retorná-lo com seus dígitos em ordem decrescente. Essencialmente, 
* reorganize os dígitos para criar o número mais alto possível.

* Description: This task is to make a function that can take any non-negative 
* integer as a argument and return it with its digits in descending order. 
* Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){return b-a}).join(''));
}

console.log(descendingOrder(123456789))
