function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad <= 12 || edad >=18){

		alert("No es un adolescente");
	}
}