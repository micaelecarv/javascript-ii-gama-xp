/*Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito*/
var transito

function sinal(cor) {
  if (cor === 'vermelho') {
    transito = 'parado'
  }

  if (cor === 'verde') {
    transito = 'siga em frente'
  } else if (cor === 'amarelo') {
    transito = 'atenção'
  }

  console.log(transito)
}

sinal('verde')
sinal('vermelho')
sinal('amarelo')
sinal('vermelho')
