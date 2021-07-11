//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function parOuImpar(numero) {
  if (numero % 2 == 0) {
    // alert("O número i é par, pois o resto da divisão por dois é igual a zero")
    return 'par';
  } else {  
    //  alert("Existe resto na divisão por dois, portando o número i é ímpar")
     return 'impar';
  }
}

console.log(parOuImpar(10));
console.log(parOuImpar(5));
console.log(parOuImpar(15));
console.log(parOuImpar(7));