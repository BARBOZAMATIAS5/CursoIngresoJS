/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	//defino las variables
	let sueldo;
	let resultado;
	

	sueldo = txtIdSueldo.value;
	//parsefloat sirve para poner numero con ,
	sueldo = parseFloat(sueldo);

	let aumento;

	aumento = sueldo * 10/100;

	resultado = sueldo + aumento;
	//.toFixed sirve para poner los decimales que se quieran mostrar entre los parentesis
	txtIdResultado.value = resultado.toFixed(2);

}
