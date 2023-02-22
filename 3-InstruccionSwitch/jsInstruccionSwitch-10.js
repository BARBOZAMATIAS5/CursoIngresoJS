/*
una agencia de viajes nos piden informar si 
hacemos viajes a lugares según la estación del año 
estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche 
*/
function mostrar() {
	let estacionIngresada = txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;

	switch (estacionIngresada) {
		case "Invierno":
			if (destinoIngresado == "Bariloche") {
				alert("Se viaja.");
			} else {
				alert("No se viaja.");
			}
		break
		case "Verano":
			if (destinoIngresado == "Mar del plata" || destinoIngresado == "Cataratas"){
				alert("Se viaja.");
			} else{
				alert("No se viaja.");
			}
		break
		case "Otoño":
			alert("Se viaja.");
		break
		case "Primavera":
			if(destinoIngresado == "Bariloche"){
				alert("No se viaja.");
			}else{
				alert("Se viaja.");
			}
		break
		default:
			alert("No existe.");
	}
}