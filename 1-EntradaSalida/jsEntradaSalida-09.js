/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var Resultado;
	var porcentaje;

	sueldo = txtIdSueldo.value;
	
	sueldo = parseInt(sueldo);
	
	Resultado = sueldo * 1.10;
	
	txtIdResultado.value = Resultado;

}

{

/*var resultado;
var porcentaje;

resultado= 1000 * 1.10

txtIdResultado.value = Resultado;

}*/