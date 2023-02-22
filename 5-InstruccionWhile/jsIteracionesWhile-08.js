/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let contador;
	let respuesta;
	let numeroIngresado;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "no";

	do {
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;

		} else if(numeroIngresado < 0) {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;

		}
		contador++;

		respuesta = prompt("¿Quiere seguir agregando números?")

	} while(respuesta == "si");

	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}
