function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	//condicion mayor de 18
	if(edad >= 18){
	//tomo la edad  
		alert("Persona mayor a 18 años.");
	}
	else{
		alert("Persona menor a 18 años.");
	}

	//condicion menor de 18
	// if(edad <= 17){
		
	// 	alert("Persona menor de 18 años.");

	// }

}