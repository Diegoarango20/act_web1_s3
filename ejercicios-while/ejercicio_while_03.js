// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

// Ejercicio While 3: Validador de Contraseña

let contrasena = "";

while (true) {
    contrasena = prompt("Ingrese una contraseña:");

    let tieneMayuscula = /[A-Z]/.test(contrasena);
    let tieneMinuscula = /[a-z]/.test(contrasena);
    let tieneNumero = /[0-9]/.test(contrasena);

    if (contrasena.length >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero) {
        console.log("Contraseña válida");
        break;
    } else {
        console.log("Contraseña inválida. Debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.");
    }
}
