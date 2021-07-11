/* Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos acima imprime o próprio número. */

var divisiveis = function(numero) {
  if (numero % 3 == 0 && numero % 5 == 0) {
    // alert("O número i é par, pois o resto da divisão por dois é igual a zero")
    return 'Fizzbuzz';
  }
  if (numero % 3 == 0){  
    //  alert("Existe resto na divisão por dois, portando o número i é ímpar")
     return 'Fizz';
  } 
  if (numero % 5 == 0){
    return 'Buzz'; 
  }

  return numero;
}

console.log(divisiveis(50));
console.log(divisiveis(15));
console.log(divisiveis(28));
console.log(divisiveis(36));
console.log(divisiveis(74));
