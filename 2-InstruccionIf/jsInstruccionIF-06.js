function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13){
		alert("Es niño.");

	}else{

		if(edad >= 18){
			alert("Es adulto.")

		}else{
			alert("Es adolescente.")
		}
	}
	// if(edad >= 18 ){
	// 	alert("Es un adulto.");

	// }

	// if(edad >= 13 && edad <= 17){
	// 	alert("Es un adolescente.");

	// } 
	
	// if(edad <= 12){
	// 	alert("Es un niño.");

	// }
}