/*Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma. */

var diasDeAula = function(dia) {
  if (dia == 'segunda' || dia == 'quarta' ||dia == 'sexta') {
    return true;
  } else {
    return false;
  }
}

console.log(diasDeAula('segunda'));
console.log(diasDeAula('domingo'));
console.log(diasDeAula('terça'));
console.log(diasDeAula('quinta'));
console.log(diasDeAula('quarta'));
