/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma; 

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    alert("El resultado de la suma es: " + suma.toFixed(2));

}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let promedio; 

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    promedio = (precio1 + precio2 + precio3) / 3;
    alert("El resultado de la suma es: " + promedio.toFixed(2));

}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let precioiva; 

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = (precio1 + precio2 + precio3);
    precioiva = suma + suma * 21 / 100;

    alert("El precio final (más IVA 21%) es: " + precioiva.toFixed(2));
}
