//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

function valorTotalPagar(valorJantar) {
  let valorTaxaGarcom = valorJantar * 0.1;
  let valorTotalPagar = valorJantar + valorTaxaGarcom;
  return valorTotalPagar;
}

console.log(valorTotalPagar(10));
console.log(valorTotalPagar(100));
console.log(valorTotalPagar(250));
console.log(valorTotalPagar(700));