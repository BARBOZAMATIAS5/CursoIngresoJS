/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let cantidadAlambre;
    let perimetro;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    perimetro = (largoTerreno + anchoTerreno) * 2;
    cantidadAlambre = perimetro * 3;

    alert("La cantidad de alambre total es: " + cantidadAlambre + " metros");

}
function Circulo () 
{
	let radioDelCirculo;
    let cantidadDeAlambre;
    let perimetroDelCirculo

    radioDelCirculo = txtIdRadio.value;

    radioDelCirculo = parseFloat(radioDelCirculo);

    //perimetro = 2 * pi * R
    perimetroDelCirculo = 2 * Math.PI * radioDelCirculo;
    cantidadDeAlambre = perimetroDelCirculo * 3;

    alert("La cantidad de alambre que se debe comprar es de: " + cantidadDeAlambre.toFixed(2) + " metros");

}
function Materiales () 
{
	
}