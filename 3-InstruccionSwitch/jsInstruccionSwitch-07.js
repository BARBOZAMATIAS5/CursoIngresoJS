/*
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde 
se encuentra Norte, Sur, Este u Oeste 
*/
function mostrar()
{
	let destinoIngresado;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch(destinoIngresado){
		case "Bariloche":
			alert("Está ubicado al OESTE");
			break;
		case "Cataratas":
			alert("Está ubicado al NORTE");
			break;
		case "Mar del plata":
			alert("Está ubicado al ESTE");
			break;
		case "Ushuaia":
			alert("Está ubicado al SUR");
			break;

	}
}//FIN DE LA FUNCIÓN