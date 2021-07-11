//Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.

function mercadoria(precoMercadoria, percentualDesconto) {
  let precoPagar = precoMercadoria - (percentualDesconto * precoMercadoria);
  return precoPagar;
}

console.log(mercadoria(250, 0.1));
