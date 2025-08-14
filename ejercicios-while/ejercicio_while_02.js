// Ejercicio While 2: Suma de Números Pares
// Implementa un ciclo while que sume todos los números pares entre 1 y 100. 
// Muestra el resultado final y cuántos números se sumaron.



let numero = 1;
let suma = 0;
let contador = 0;

while (numero <= 100) {
    if (numero % 2 === 0) {
        suma += numero;
        contador++;
    }
    numero++;
}

console.log("La suma de los números pares es:", suma);
console.log("Cantidad de números sumados:", contador);
