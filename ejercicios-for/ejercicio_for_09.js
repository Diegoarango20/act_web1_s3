// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.


let frecuencia = {};

// Inicializar frecuencias
for (let suma = 2; suma <= 12; suma++) {
    frecuencia[suma] = 0;
}

// Simulación de 1000 lanzamientos
for (let i = 0; i < 1000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    frecuencia[suma]++;
}

// Mostrar frecuencias
console.log("Frecuencia de cada suma:");
for (let suma = 2; suma <= 12; suma++) {
    console.log(`${suma}: ${frecuencia[suma]}`);
}

// Determinar la suma más común
let sumaMasComun = null;
let maxFrecuencia = -1;

for (let suma = 2; suma <= 12; suma++) {
    if (frecuencia[suma] > maxFrecuencia) {
        maxFrecuencia = frecuencia[suma];
        sumaMasComun = suma;
    }
}

console.log(`La suma más común es ${sumaMasComun} con ${maxFrecuencia} apariciones.`);
