function mostrar()
{
	//tomo el mes
	let mesDelAno = txtIdMes.value;

	switch(mesDelAno){
		case "Enero":
			alert("Que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("A clases!!!.");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!.");
			break;
		// default:
		// 	alert("No es enero, marzo, julio ni diciembre");
	}
/*
	if(mes == "Enero"){
		alert("Que comiences bien el año!!!.");

	}else if(mes ==  "Marzo"){
		alert("A clases!!!.");

	}else if(mes == "Julio"){
		alert("Se vienen las vacaciones!!!.");

	}else if(mes == "Diciembre"){
		alert("Felices fiestas!!!.");

	}else{
		alert(mes);

	}*/
}