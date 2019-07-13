//Modifique a função sum para que ela use o operador rest e funcione com qualquer numero de parametros
const sum = (function() {
 "use strict";
 return function sum(...argsRest) {
   return argsRest.reduce((a, b) => a + b, 0);
 };
})();
console.log(sum(1, 2, 3)); // 6

// Copie todos os conteudo de arr1 dentro do arr2 usando spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
 "use strict";
 arr2 = [...arr1]; // change this line
})();
console.log(arr2);
