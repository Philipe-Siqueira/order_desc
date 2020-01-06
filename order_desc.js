/*
* Author: Philipe Siqueira
* Versão 1.0
*/

function descendingOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){return b-a}).join(''));
}

console.log(descendingOrder(123456789))