function mostrar() {
	let estacionIngresada;
	let destinoIngresado;
	//let tarifaViaje;
	let descuento;
	let aumento;
	let tarifaFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	const TARIFA_VIAJE = 15000;
	descuento = 0;
	aumento = 0;

	tarifaFinal = parseFloat(tarifaFinal);

	switch (estacionIngresada) {
		case "Invierno":
			if (destinoIngresado == "Bariloche") {
				aumento = 20;
			} else
				if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba") {
					descuento = 10;
				} else {
					descuento = 20;
				}
			break;
		case "Verano":
			if (destinoIngresado == "Bariloche") {
				descuento = 20;
			} else
				if (destinoIngresado == "Cataratas" || destinoIngresado == "Cordoba") {
					aumento = 10;
				} else {
					aumento = 20;
				}
			break;
		case "Otoño":
		case "Primavera":
			if (destinoIngresado != "Cordoba") {
				aumento = 10;
			}
			break;
		default:
			alert("No existe el dato");

	}
	if (aumento != 0) {
		tarifaFinal = TARIFA_VIAJE + TARIFA_VIAJE * aumento / 100;
	} else if(descuento != 0){
		tarifaFinal = TARIFA_VIAJE - TARIFA_VIAJE * descuento / 100;
	} else{
		tarifaFinal = TARIFA_VIAJE;
	}

	alert("El precio final del viaje es: " + tarifaFinal.toFixed("2"));

}