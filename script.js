// Agrega a la pantalla el valor del boton de la calculadora que toque
function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
}
// Toma el valor de la pantalla y ejecuta los cálculos
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}

// Borra la pantalla
function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
}
