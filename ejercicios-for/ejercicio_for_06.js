// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow().
// Debe mostrar el proceso paso a paso.

function calcularPotencia() {
    const base = parseFloat(prompt("Ingrese la base:"));
    const exponente = parseInt(prompt("Ingrese el exponente (entero, puede ser negativo, cero o positivo):"), 10);

    if (isNaN(base) || isNaN(exponente)) {
        console.log("Entrada inválida. Debe ingresar números.");
        return;
    }

    if (base === 0 && exponente <= 0) {
        console.log("Indefinido: 0 elevado a 0 o a un exponente negativo no está definido.");
        return;
    }

    let resultado = 1;
    const pasos = Math.abs(exponente);

    if (exponente === 0) {
        console.log(`Proceso: por definición, cualquier número elevado a 0 es 1.`);
    } else {
        if (exponente < 0) {
            console.log(`Exponente negativo: se calculará ${base} ^ ${-exponente} y luego se tomará el inverso.`);
        }

        for (let i = 1; i <= pasos; i++) {
            const previo = resultado;
            resultado *= base;
            console.log(`Paso ${i}: ${previo} * ${base} = ${resultado}`);
        }

        if (exponente < 0) {
            console.log(`Inverso: 1 / ${resultado} = ${1 / resultado}`);
            resultado = 1 / resultado;
        }
    }

    console.log(`Resultado final: ${base} ^ ${exponente} = ${resultado}`);
}

calcularPotencia();
