function mostrar()
{
	let edad;
	let estado;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estado = document.getElementById("estadoCivil").value;

	if(edad <= 17 && estado != "Soltero" ){
		alert("Es muy pequeño para NO ser soltero");
		
	}

}