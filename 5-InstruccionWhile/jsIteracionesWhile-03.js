/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	//claveIngresada = prompt("Ingrese la clave:");

	/*while(claveIngresada != "utn750"){
		alert("Intente nuevamente.");
		claveIngresada = prompt("Ingrese el número clave.");
	}*/

	do {
		claveIngresada = prompt("Ingrese la clave:");
	} while (claveIngresada != "utn750");


	alert("Has iniciado sesión.");

}

