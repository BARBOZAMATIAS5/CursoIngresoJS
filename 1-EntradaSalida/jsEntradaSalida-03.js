/* Se ingresará por id el valor de una compra de productos para el hogar. Se deberá agregar el iva (21%) y 
luego se deberá restar el 5% en concepto de compra mayorista. El programa deberá mostrar por alert importe bruto, 
el iva, el importe con iva, el valor del descuento y el total a pagar.
*/

function mostrar()
{
	let producto;

	producto = txtIdNombre.value;
	producto = parseFloat(producto)

	let iva;
	let productoConIva;
	let descuento;
	let totalAPagar;

	iva = producto * 21 / 100;
	iva = parseFloat(iva);
	
	productoConIva = producto + iva;
	productoConIva = parseFloat(productoConIva);
	
	descuento = producto * 05 / 100;
	descuento = parseFloat(descuento);
	
	totalAPagar = productoConIva - descuento;
	totalAPagar = parseFloat(totalAPagar);

	alert("El importe bruto es de: " + producto.toFixed(2) + 
	" \nEl IVA (21%) es de: " + iva.toFixed(2) +
	" \nEl producto con IVA es de: " + productoConIva.toFixed(2) + 
	" \nEl descuento es de: " + descuento.toFixed(2) +
	" \nSiendo el precio final: " + totalAPagar.toFixed(2));


}