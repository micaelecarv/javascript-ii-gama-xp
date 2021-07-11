//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(numero) {
  if (numero == 1) {
    return 'Domingo';
  }
  if (numero == 2) {
    return 'Segunda';
  }
  if (numero == 3) {
    return 'Terça';
  }
  if (numero == 4) {
    return 'Quarta';
  }
  if (numero == 5) {
    return 'Quinta';
  }
  if (numero == 6) {
    return 'Sexta';
  }
  if (numero == 7) {
    return 'Sabado';
  }
}

console.log(diaDaSemana(1));
console.log(diaDaSemana(7));
console.log(diaDaSemana(5));
console.log(diaDaSemana(3));
console.log(diaDaSemana(2));
console.log(diaDaSemana(1));
console.log(diaDaSemana(6));