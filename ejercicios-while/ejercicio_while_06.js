// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.



// Generar un array con 15 números aleatorios entre 1 y 100

let numeros = [];
for (let i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.log("Array generado:", numeros);

// Elemento a buscar
let objetivo = parseInt(prompt("Ingrese el número que desea buscar:"));

let i = 0;
let encontrado = false;

while (i < numeros.length) {
    if (numeros[i] === objetivo) {
        console.log(` Número ${objetivo} encontrado en la posición ${i}`);
        encontrado = true;
        break;
    }
    i++;
}

if (!encontrado) {
    console.log(` El número ${objetivo} no está en el array.`);
}
