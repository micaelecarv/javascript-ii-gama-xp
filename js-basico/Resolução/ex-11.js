/* Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.*/

var altura = Number(prompt('Qual a sua altura em metros?'));
var peso = Number(prompt('Qual a sua massa em kgs?'));

var IMC = peso / (altura * altura);

console.log(IMC);
alert(`O seu IMC é ${IMC}`);
