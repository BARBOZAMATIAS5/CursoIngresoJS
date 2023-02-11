function mostrar() {
	let notaexamen;

	notaexamen = Math.floor(Math.random() * 10 + 1);

	if(notaexamen >= 9) {
		alert("EXCELENTE = " + notaexamen);

	} else if(notaexamen <= 3) {
		alert("VAMOS, LA PRÓXIMA SE PUEDE = " + notaexamen);

	} else {
		alert("APROBÓ = " + notaexamen);
	}

}
//empezar siempre por lo extremos!!!!!!!!!!!!!!!!!!!!!!!