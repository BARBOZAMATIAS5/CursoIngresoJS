/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let contador;
	//iniciar variables

	banderaDelPrimero= "es el primero";
	respuesta = true;
	contador = 0;

	do{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero")
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primero";
		}else
		{
			if(numeroIngresado > numeroMaximo){
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado < numeroMinimo){
				numeroMinimo = numeroIngresado;
			}
		}
		contador++;
		respuesta = confirm("¿Desea continuar? SI/NO");

	}while(respuesta == true);

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;

}