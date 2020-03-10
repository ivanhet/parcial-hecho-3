
/*
En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var cantMujeres=0
	var acumuladorMujeres=0
	var cantHombresSolteros=0
	var edadMasChica=0
	var edadMasGrande=0
	var nombreJoven;
	var nombreViejo;
	var respuesta= "si";
	var cantMujeresCasadasOviudas=0
	var acumuladorHombres = 0
	var sexoMasGrande;


	while(respuesta == "si")

{
		nombre=prompt("ingrese su nombre");
do
{	
	sexo= prompt("ingrese su sexo: f / m");
}
	while (sexo != "f" && sexo != "m" )
do
{
	edad=parseInt(prompt("ingrese su edad"));
}
	while (edad= isNaN(edad) || edad<18)
do
{	estadoCivil= prompt("ingrese su estado civil");

}
	while (estadoCivil!= "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")

if (edadMasChica<edad)
{
	edadMasChica= edad;
}
if (edadMasGrande>edad)
{
	edadMasGrande= edad;
	sexoMasGrande = sexo;
}

if ( sexo= "m" && estadoCivil == "casado" && edad == edadMasChica)
{
	nombreJoven= nombre
}
if (sexo= "m" && edad == edadMasGrande)
{
	nombreViejo= nombre
}
if (sexo == "f")
{
	acumuladorMujeres= acumuladorMujeres + edad 
	cantMujeres++;
}

if (sexo== "m" && estadoCivil == "soltero") 
{
	cantHombresSolteros++
	acumuladorHombres = acumuladorHombres + edad
}
if ( sexo == "f" && estadoCivil == "soltero" || estadoCivil == "casado")
{	
	cantMujeresCasadasOviudas++
}
respuesta=prompt("Desea seguir iterando?");
}

document.write("nombre del hombre casado mas joven " + nombreJoven + "</br>" );
document.write("sexo y nombre del pasajero mas viejo " + sexoMasGrande + "edad" + nombreViejo + "</br>");
document.write("cantidad de mujeres casadas o viudas " + cantMujeresCasadasOviudas + "</br>");
document.write(parseInt("promedio de edad de las mujeres " + (acumuladorMujeres/cantMujeres) + "</br>" ));
document.write(parseInt("promedio de edad de hombres solteros " + (acumuladorHombres/cantHombresSolteros)));


}
