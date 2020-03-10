/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en tota */

function mostrar()
{
	var precio; 
	var cantidad;
	var producto;
	var marca;
	var fabricante;
	var contadorFabricante=0;
	var contadorJabones = 0
	var cantidadMayorFabricante;
	var flag= "no paso";
	var barbijoMasCaro;
	var cantidadMayor;
	var barbijoMasCaroCantidad;
	var barbijoMasCaroFabricante;
	var cantidadDeJabones;
	var i=0
	
for (i=0 ; i<5; i++)
{	
do
{
		producto= prompt("ingrese producto");
}
while (producto != "barbijo" && producto != "jabon" && producto != "alcohol" );

do
{
		cantidad= prompt("ingrese cantidad");
		cantidad= parseInt(cantidad);
}
while (cantidad= isNaN(cantidad) || cantidad<100 || cantidad>300);

do
{
		precio= prompt("ingrese precio");
		precio= parseInt(precio);	
}
while (precio=isNaN(precio || precio<1 || precio >300));

	marca= prompt("ingrese marca");
	fabricante= prompt("ingrese fabricante");
}
if(producto== "barbijo" && barbijoMasCaro< precio || flag == "no paso")
{
	barbijoMasCaro = precio;
	barbijoMasCaroCantidad= cantidad;
	barbijoMasCaroFabricante = fabricante;
	flag= "si paso";
}
if (contadorJabones=0 || cantidadDeJabones<cantidad)
{
	cantidadDeJabones = cantidad
}

if (contadorFabricante ==0 || cantidadMayor<cantidad)
{
		cantidadMayor = cantidad
		cantidadMayorFabricante= fabricante;
}

document.write("cantidad de unidades de barbijo mas caro " + barbijoMasCaroCantidad + " y fabricante " + cantidadMayorFabricante + "</br>" );
document.write("fabricante del producto con mas unidades " + cantidadMayorFabricante + "</br>");
document.write("cantidad total de jabones " + cantidadDeJabones + "</br>");

}	

