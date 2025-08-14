// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.



let a = 0; 
let b = 1; 
let contador = 0;
let limite = 20;

console.log("📜 Secuencia de Fibonacci:");

while (contador < limite) {
    console.log(a);
    let siguiente = a + b; 
    a = b; 
    b = siguiente;
    contador++;
}
