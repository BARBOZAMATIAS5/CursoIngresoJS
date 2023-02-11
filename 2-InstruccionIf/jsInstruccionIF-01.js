function mostrar()
{
	//declaro la varibale
	let edad;

	//tomo la edad
	edad = document.getElementById("txtIdEdad").value;
	//edad = txtIdEdad.value;
	edad = parseInt(edad);

	//condicion
	if (edad == 15)
	{
		alert("Niña bonita");

	}

}

	/*OPERADORES RELACIONALES
	== igualdad
	!= desigualdad
	> mayor que
	< menor que
	>= mayor o igual que
	<= menos o igual que+

	condicion --> if (variable == (num){
		alert("Niña bonita");
	}
	*/
