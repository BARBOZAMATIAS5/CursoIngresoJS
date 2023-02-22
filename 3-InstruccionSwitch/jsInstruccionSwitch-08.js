/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino 
*/
function mostrar()
{
	let destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío.");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor.");
			break;

	}
}//FIN DE LA FUNCIÓN