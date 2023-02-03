/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
	//defino la primera variable nombre para nombre propio
	let nombre;
	nombre = txtIdNombre.value; 

	//defino la segunda variable edad para la edad correspondiente
	let edad;
	edad = txtIdEdad.value;

	//Uso los simbolos de + para concatenar las variables en una misma alert
	alert("Usted se llama " + nombre + " y tiene " + edad + " años.");

}

