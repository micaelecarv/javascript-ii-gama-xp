//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function numerosIguais(numero1, numero2) {

  if (numero1 > numero2) {
    return 'O primeiro número é maior que o segundo';
  }
  if (numero1 < numero2) {
    return 'O segundo número é maior que o primeiro'
  }
  if (numero1 === numero2) {
    return 'Os números são iguais'
  }
}

console.log(numerosIguais(20, 10));
console.log(numerosIguais(10, 10));
console.log(numerosIguais(20, 50));
console.log(numerosIguais(10, 10));