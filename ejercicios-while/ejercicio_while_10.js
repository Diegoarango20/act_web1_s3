// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.


let calificacion;
let suma = 0;
let contador = 0;
let maxNota = -Infinity;
let minNota = Infinity;

while (true) {
    calificacion = parseFloat(prompt("Ingrese una calificación (o -1 para terminar):"));

    if (calificacion === -1) {
        break;
    }

    if (calificacion < 0 || calificacion > 100) {
        console.log(" Calificación inválida. Debe estar entre 0 y 100.");
        continue;
    }

    suma += calificacion;
    contador++;

    if (calificacion > maxNota) {
        maxNota = calificacion;
    }

    if (calificacion < minNota) {
        minNota = calificacion;
    }
}

if (contador > 0) {
    let promedio = suma / contador;
    console.log(` Promedio: ${promedio.toFixed(2)}`);
    console.log(` Nota más alta: ${maxNota}`);
    console.log(` Nota más baja: ${minNota}`);
} else {
    console.log("No se ingresaron calificaciones.");
}
