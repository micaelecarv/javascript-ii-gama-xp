//Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function valorDesconto(valorProduto) {
  let valorDesconto = valorProduto - valorProduto * 0.05
  return valorDesconto
}

console.log(valorDesconto(550))
