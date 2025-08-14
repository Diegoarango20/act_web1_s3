// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.



let texto = "programacion en javascript";
let contador = {};

// Contar caracteres
for (let i = 0; i < texto.length; i++) {
    let char = texto[i];
    if (char !== " ") { // ignorar espacios
        contador[char] = (contador[char] || 0) + 1;
    }
}

// Ordenar alfabéticamente
let caracteresOrdenados = Object.keys(contador).sort();

// Mostrar resultados
for (let i = 0; i < caracteresOrdenados.length; i++) {
    let char = caracteresOrdenados[i];
    console.log(`${char}: ${contador[char]}`);
}
