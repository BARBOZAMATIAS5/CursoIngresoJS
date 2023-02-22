/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. 
*/
function mostrar()
{
	let contador;//letiable de control
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;
	
	while(contador < 5){
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador++;

	}

	promedio = acumulador / contador;
	
	txtIdSuma.value= acumulador;
	txtIdPromedio.value= promedio;

}