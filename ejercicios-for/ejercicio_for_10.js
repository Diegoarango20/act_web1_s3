// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.



let texto = "Anita lava la tina";

let limpio = "";
for (let i = 0; i < texto.length; i++) {
    let char = texto[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) { 
        limpio += char;
    }
}

// Verificar si es palíndromo
let esPalindromo = true;
for (let i = 0; i < limpio.length / 2; i++) {
    if (limpio[i] !== limpio[limpio.length - 1 - i]) {
        esPalindromo = false;
        break;
    }
}

if (esPalindromo) {
    console.log("Es un palíndromo");
} else {
    console.log("No es un palíndromo");
}
