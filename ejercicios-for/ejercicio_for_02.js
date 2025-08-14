// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.


let altura = 10;

for (let i = 1; i <= altura; i++) {
    let espacios = " ".repeat(altura - i);
    let asteriscos = "*".repeat(2 * i - 1);
    console.log(espacios + asteriscos);
}
