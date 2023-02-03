/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//Declaro la variable nombreIngresado
	let nombreIngresado;

	//Asigno a nombreIngresado .value, y, busco si coincide en archivo HTML el id "txtIdNombre.value"
	nombreIngresado=txtIdNombre.value;
	//nombreIngresado=document.getElementById("txtIdNombre"),value;

	//Muestro por alert
	alert(nombreIngresado);

}


