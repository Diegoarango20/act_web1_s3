// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.



const secreto = Math.floor(Math.random() * 100) + 1; // número entre 1 y 100
let intentos = 0;
const maxIntentos = 7;
let adivinanza;

console.log("🎯 ¡Adivina el número entre 1 y 100! Tienes 7 intentos.");

while (intentos < maxIntentos) {
    adivinanza = parseInt(prompt(`Intento ${intentos + 1}: Ingresa tu número`));
    intentos++;

    if (adivinanza === secreto) {
        console.log(` ¡Felicidades! Adivinaste el número ${secreto} en ${intentos} intento(s).`);
        break;
    } else if (adivinanza < secreto) {
        console.log("El número secreto es mayor.");
    } else {
        console.log(" El número secreto es menor.");
    }

    if (intentos === maxIntentos) {
        console.log(` Te quedaste sin intentos. El número era ${secreto}.`);
    }
}
