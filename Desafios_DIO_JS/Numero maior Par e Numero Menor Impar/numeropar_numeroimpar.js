const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  }
  if (numero % 2 === 1){
    menorNumeroImpar = numero;
    if (numero < menorNumeroImpar){
      menorNumeroImpar = numero;
    }
  }
}
       
    print("Maior número par: " + maiorNumeroPar);
    print("Menor número impar: " + menorNumeroImpar);