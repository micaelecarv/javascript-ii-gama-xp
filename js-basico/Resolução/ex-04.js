/*Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?*/

var valorBicicleta = (300 * 100) / 60;
var lucroBicicleta = (0.25 * valorBicicleta) + valorBicicleta;

console.log(lucroBicicleta);