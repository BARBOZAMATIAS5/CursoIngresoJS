/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de impuesto.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    
    let lamparas;
    let precioLamp;
    let marca;
    let precioBruto;
    let precioFinal;
    let impuestoiibb;

    lamparas = document.getElementById("txtIdCantidad").value;
    lamparas = parseInt(lamparas);

    precioLamp = 35;
    precioLamp = parseFloat(precioLamp);

    marca = document.getElementById("Marca").value;

    precioBruto = (precioLamp * lamparas);
    precioBruto = parseFloat(precioBruto);

    //puntoA
    if (lamparas >= 6) {
        precioFinal = precioBruto - precioBruto * 0.5;
        txtIdprecioDescuento.value = precioFinal;

        //puntoB
    } else if(lamparas == 5){
        if(marca == "ArgentinaLuz"){
            precioFinal = precioBruto - precioBruto * 0.4;

        } else{
            precioFinal = precioBruto - precioBruto * 0.3;
        }
        //punto C
    } else if(lamparas == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            precioFinal = precioBruto - precioBruto * 0.25;

        }else{
            precioFinal = precioBruto - precioBruto * 0.20;

        }
        //punto D
    } else if(lamparas == 3){
        if(marca == "ArgentinaLuz"){
            precioFinal = precioBruto - precioBruto * 0.15;

        }else if(marca == "FelipeLamparas"){
            precioFinal = precioBruto - precioBruto * 0.10;

        }else{
            precioFinal = precioBruto - precioBruto * 0.05;
        }
    } else{
        precioFinal = precioBruto;
    }

    txtIdprecioDescuento.value = precioFinal.toFixed("2");

    if(precioFinal >= 120){
        impuestoiibb = precioFinal * 10 /100 ;
        precioFinal = precioFinal + impuestoiibb;
        alert("impuesto Usted pagó: " + impuestoiibb);
    }
}