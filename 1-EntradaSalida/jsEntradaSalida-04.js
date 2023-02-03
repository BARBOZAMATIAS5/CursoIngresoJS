/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//defini variable dato

	let dato;

	//la variable le asigne el codigo prompt
	dato = prompt("MUESTRA");
	
	//Id.value mostrará la variable dato
	txtIdNombre.value = dato
}

