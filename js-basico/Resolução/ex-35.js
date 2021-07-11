// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorOuMenorDeIdade(anoDeNascimento) {
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoDeNascimento;
  if (idade >= 18) {
    return 'Maior de Idade';
  } else {
    return 'Menor de Idade';
  }
}

console.log(maiorOuMenorDeIdade(1995));
console.log(maiorOuMenorDeIdade(1990));
console.log(maiorOuMenorDeIdade(1980));
console.log(maiorOuMenorDeIdade(2010));
