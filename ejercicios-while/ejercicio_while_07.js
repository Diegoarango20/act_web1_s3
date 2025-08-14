// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.


let numero = parseInt(prompt("Ingrese un número entero:"));
let contador = 0;


if (numero < 0) {
    numero = Math.abs(numero);
}

if (numero === 0) {
    contador = 1;
} else {
    while (numero > 0) {
        numero = Math.floor(numero / 10); 
        contador++;
    }
}

console.log(` El número tiene ${contador} dígito(s).`);
