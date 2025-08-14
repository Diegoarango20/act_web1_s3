// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de 
// un número ingresado por el usuario.


function calcularFactorial() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));
    let factorial = 1;
    let i = 1;

    while (i <= numero) {
        factorial *= i;
        i++;
    }

    console.log(`El factorial de ${numero} es: ${factorial}`);
}

calcularFactorial();
