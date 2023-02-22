/*
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad 
para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento 
*/
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