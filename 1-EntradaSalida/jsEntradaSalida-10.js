/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{	//defino las variables a usar durante el procedimiento
	let importe;
	let descuento;
	let resultado;

	//asigno a importe el texto con .value
	importe = txtIdImporte.value;

	//asigno a importe parseint para que tome solamente los numeros como válidos
	importe = parseInt(importe);

	//EQUIS numero /100 da como resultado "X%"
	descuento = importe * 25/100;
	
	resultado = importe - descuento;
	//asigno a txtIdResultado.value el resultado para que se muestre dentro del mismo texto
	txtIdResultado.value = resultado.toFixed(2);

}
