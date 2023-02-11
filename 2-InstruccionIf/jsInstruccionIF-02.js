function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	//tomo la edad  

	if(edad >= 18){

		alert("Persona mayor de 18 años.");

	}

}