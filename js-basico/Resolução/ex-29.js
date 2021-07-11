//Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem..

function calcularTempo(distancia, velocidadeMedia) {
  let tempo = velocidadeMedia / distancia;
  return tempo;
}

console.log(calcularTempo(100, 80));