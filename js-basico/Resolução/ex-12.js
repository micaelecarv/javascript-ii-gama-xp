/*Crie uma função que determina se um número é par ou impar.*/

/* --- Observações
Como verificar se um número é par ou ímpar no Javascript?
A lógica simples é: se o resto da divisão por dois for 0, é par. A lógica complicada é: se a unidade final do número for 0,2,4,6 ou 8 é par. Simples, a função "n % 2" retorna o valor do resto da divisão por dois! */

var par = function(numero) {
  if (numero % 2 == 0) {
    // alert("O número i é par, pois o resto da divisão por dois é igual a zero")
    return true;
  } else {  
    //  alert("Existe resto na divisão por dois, portando o número i é ímpar")
     return false;
  }
}

console.log(par(20));
console.log(par(15));



