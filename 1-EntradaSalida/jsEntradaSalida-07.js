/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//defino las variables 
	let numero1;
	//asigno a las variables el valor que contiene esa caja mediante .value
	numero1 = txtIdNumeroUno.value;
	let numero2;
	numero2 = txtIdNumeroDos.value;
	//asigno nuevamente a las variables parseint
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	//defino variable que dará el resultado de la suma
	let suma;
	suma = numero1 + numero2;

	alert("La suma es " + suma);	
}

function restar()
{
	//realizo el mismo procedimiento con las demás operaciones matematicas
	let numero1;
	numero1 = txtIdNumeroUno.value;
	let numero2;
	numero2 = txtIdNumeroDos.value;
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	let resta;
	resta = numero1 - numero2;

	alert("La resta es " + resta);
}

function multiplicar()
{ 
	let numero1;
	numero1 = txtIdNumeroUno.value;
	let numero2;
	numero2 = txtIdNumeroDos.value;
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	let multipli;
	multipli = numero1 * numero2;

	alert("La multiplicación es igual a " + multipli);
}

function dividir()
{
	let numero1;
	numero1 = txtIdNumeroUno.value;
	let numero2;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	let division;
	division = numero1 / numero2;

	alert("La división es igual a " + division)
}

