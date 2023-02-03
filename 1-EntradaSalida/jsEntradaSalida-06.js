/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//defino las variables con let (nombre de variables)
	let numero1;
	//me fijo en .html qué nombres usa las casillas .value
	numero1 = txtIdNumeroUno.value;

	let numero2;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	let resultado;
	//asigno a resultado la suma de los parseInt
	resultado = numero1 + numero2;
	
	alert("La suma es " + resultado);
}

