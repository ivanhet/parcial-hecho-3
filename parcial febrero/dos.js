

/*
Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total. */


function mostrar()
{
    var ingrediente;
    var precio;
    var peso;
    var descuento;
    var precioMax =0
    var ingredienteMax;
    var acumPeso =10
    var acumPrecio=0
    var respuesta= "si"


 
{
do
{
    ingrediente= prompt("ingrese ingrediente v, a, m");
}
    while(ingrediente=! "v" && ingrediente!= "m" && ingrediente!= "a")

do
{
    precio= prompt("ingrese precio mayor a cero");
    precio= parseInt(precio);
}
    while(precio= isNaN(precio || precio<=0))
do
{
    peso=prompt("ingrese peso en kilos entre 10 y 1000");
    peso=parseInt(peso);
}
    while(peso!=parseInt(peso) || peso <10 || peso>1000);

if ( peso >=100)
{
    descuento= (precio*15)/100;
}
if (peso >=300)
{
    descuento = (precio*25)/100;
}
if (precio>precioMax)
{
        precioMax= precio;
        ingredienteMax = ingrediente;
} 
acumPrecio = acumPrecio + precio
acumPeso = acumPeso + peso
respuesta = prompt ("desea ingresar otro numero?");
}
while(respuesta == "si" || respuesta == "SI");

document.write("importe total a pagar " + acumPrecio + "</br>");
document.write("importe total con descuento " + (acumPrecio - descuento) + "</br>" );
document.write(parseInt("el alimento mas caro " + ingredienteMax + "</br"));
document.write(parseInt("promedio de peso por kilo total " + (acumPeso/acumPrecio)));
}

/*
acumPrecio = acumPrecio + precio
acumPeso = acumPeso + peso

respuesta = prompt("Desea seguir iterando?");

}//fin while
 
 document.write("Importe total a pagar, bruto sin descuento: "+acumPrecio+"<br>");
 document.write("Importe total a pagar con descuento: "+(acumPrecio-descuento)+"<br>");
 document.write("Tipo de alimento más caro: "+maxAlimento+"<br>");
 document.write("Promedio de precio por kilo: "+(acumPrecio/acumPeso)+"<br>");*/