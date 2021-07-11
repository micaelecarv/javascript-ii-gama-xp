/* Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs
a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
b) Deverá ser possível passar 2 números para a operação escolhida
c) Deverá retornar o resultado e imprimir no console| */

function calculadora(numero1, numero2, operacao) {
  if (operacao == 'soma') {
    return (numero1 + numero2);
  }
  if (operacao == 'multiplicacao') {
    return (numero1 * numero2);
  }
  if (operacao == 'divisao') {
    return (numero1 / numero2);
  }
  if (operacao == 'subtracao') {
    return (numero1 - numero2);
  }
}

console.log(calculadora(20,10, 'soma'));
console.log(calculadora(20,10, 'divisao'));