//Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia. 


function conversorRealParaDolar(quantia){
  let dolar = 5.26;
  let resultado = quantia / dolar;
  return resultado
}

console.log(conversorRealParaDolar(20))