function mostrar()
{
	let mesDelAno = document.getElementById("txtIdMes").value;
	
	switch(mesDelAno){
		case "Febrero":
			alert("Tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días.");
			break;
		default:
			alert("Tiene 31 días.");
			break;

	}
//31 dias : enero, marzo, mayo, julio, agosto, octubre, diciembre
//30 dias : abril, junio, septiembre, noviembre
}