/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	respuesta='si';
	//respuesta = true;

	while(respuesta == "si"){
	//while(respuesta == true)

		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador++;

		respuesta = prompt("Ingresa otro número si/no");
		//respuesta = confirm("Ingresa otro numero");
	}

	promedio = acumulador / contador;
	
	txtIdSuma.value= acumulador;
	txtIdPromedio.value= promedio;

}//FIN DE LA FUNCIÓN