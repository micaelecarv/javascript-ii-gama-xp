/* Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. */

var tabuada = function (numero) {
  for (let index = 0; index <= 10; index++) {
    console.log(numero * index)
  }
}

tabuada(2);
