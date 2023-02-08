/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let fahrenheitACenti;

    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat(temperatura);
    
    
    //la cuenta hecha sirve para calcular de FAHRENHEIT a CENTIGRADOS
    fahrenheitACenti = (temperatura - 32) * 5 / 9;

    alert("La temperatura de FAHRENHEIT a CENTIGRADOS es: " + fahrenheitACenti.toFixed(2));

}
function CentigradosFahrenheit () 
{
	let temperatura;
    let centigradosAFahren;

    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat(temperatura);
    
    //la cuenta hecha sirve para calcular de CENTIGRADOS a FAHRENHEIT
    centigradosAFahren = (temperatura * 9 / 5) + 32;

    alert("La temperatura de CENTIGRADOS a FAHRENHEIT es: " + centigradosAFahren.toFixed(2));

}
