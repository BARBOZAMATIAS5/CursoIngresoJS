/*
Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa, 
para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa, 
en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al usuario por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad menores a 80

A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos preguntarle la edad.
*/
function mostrar()
{
	let altura;
	let edad;

	altura = prompt("INDIQUE SU ALTURA EN CM");
	altura = parseInt(altura);

	if( altura >= 120 ){
		edad = prompt("INDIQUE SU EDAD");
		edad = parseInt(edad);

		if(edad <= 17 || edad >= 80){
			alert("MONTO A PAGAR: 200$");

		}else{
			alert("MONTO A PAGAR: 400$");
		}

	}else{
		alert("USTED MIDE MENOS DE 120 CM, NO PUEDE INGRESAR.");
	}

}

	// let dato;
	// dato = prompt("INGRESE UN DATO");
	
	// alert(dato);