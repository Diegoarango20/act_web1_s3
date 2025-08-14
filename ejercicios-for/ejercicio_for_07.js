// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.


let matriz = [];

for (let fila = 0; fila < 5; fila++) {
    matriz[fila] = [];
    for (let col = 0; col < 5; col++) {
        matriz[fila][col] = fila + col;
    }
}

// Mostrar la matriz formateada
for (let fila = 0; fila < 5; fila++) {
    console.log(matriz[fila].join("\t"));
}
