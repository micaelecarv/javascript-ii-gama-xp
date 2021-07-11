// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function fatorial(n){
  if ((n == 0) || (n == 1)) // os || signica OU 
    return 1;
  else
    return (n * fatorial(n - 1));
}

console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));
console.log(fatorial(6));
console.log(fatorial(7));
console.log(fatorial(8));
console.log(fatorial(9));
console.log(fatorial(10));
