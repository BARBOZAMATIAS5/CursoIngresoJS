/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	//punto A
	do {
		edadIngresada = prompt("Ingrese su edad (mayor a 18 y menor a 90).");
		edadIngresada = parseInt(edadIngresada);
		if (edadIngresada >= 18 && edadIngresada <= 90) {
			document.getElementById("txtIdEdad").value = edadIngresada;
		} else {
			alert("Edad no válida");
		}
	} while (!(edadIngresada >= 18 && edadIngresada <= 90));
	//punto B
	do {
		sexoIngresado = prompt("Ingrese su sexo: 'M' para masculino, 'F' para femenino.");
		if (sexoIngresado == "M" || sexoIngresado == "F") {
			document.getElementById("txtIdSexo").value = sexoIngresado;
		} else {
			alert("Sexo no válido.");
		}
	} while (!(sexoIngresado == "M" || sexoIngresado == "F"));
	//punto C
	do {
		estadoCivilIngresado = prompt("Ingrese su estado civil: 1 para solterx, 2 para casadx, 3 para divorciadx, 4 para viudx");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
		switch (estadoCivilIngresado) {
			case 1:
				document.getElementById("txtIdEstadoCivil").value = "Solterx";
				break;
			case 2:
				document.getElementById("txtIdEstadoCivil").value = "Casadx";
				break;
			case 3:
				document.getElementById("txtIdEstadoCivil").value = "Separadx";
				break;
			case 4:
				document.getElementById("txtIdEstadoCivil").value = "Viudx";
				break;
			default:
				alert("Estado civil no válido.");
		}
	} while (!(estadoCivilIngresado >= 1 && estadoCivilIngresado <= 4));
	//punto D
	do {
		sueldoBruto = prompt("Ingrese su sueldo bruto, no menor a 8000");
		sueldoBruto = parseFloat(sueldoBruto).toFixed("2");

		if (sueldoBruto >= 8000) {
			document.getElementById("txtIdSueldo").value = sueldoBruto;
		} else {
			alert("Sueldo no válido.");
		}
	} while (!(sueldoBruto >= 8000));
	//punto E
	do {
		numeroLegajo = prompt("Ingrese el número de legajo.");
		numeroLegajo = parseInt(numeroLegajo);

		if (numeroLegajo >= 1 && numeroLegajo <= 9999) {
			document.getElementById("txtIdLegajo").value = numeroLegajo;
		} else {
			alert("Número de legajo no válido.");
		}
	} while (!(numeroLegajo >= 1 && numeroLegajo <= 9999));
	do {
		nacionalidad = prompt("Ingrese la nacionalidad: 'A' para argentinos, 'E' para extranjeros, 'N' para nacionalizados.")

		switch (nacionalidad) {
			case "A":
				document.getElementById("txtIdNacionalidad").value = "Argentinx";
				break;
			case "E":
				document.getElementById("txtIdNacionalidad").value = "Extranjerx";
				break;
			case "N":
				document.getElementById("txtIdNacionalidad").value = "Nacionalizadx";
				break;
			default:
				alert("Dato no válido");
		}
	} while (!(nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N"));

}
