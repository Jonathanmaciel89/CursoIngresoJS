/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var Resultado;
	var porcentaje;

	importe = txtIdImporte.value;
	
	importe = parseInt(importe);
	
	Resultado = importe - importe * 0.25;
	
	txtIdResultado.value = Resultado;


}

/*{

var Resultado;
var porcentaje;

Resultado= 1000 - 1000 * 0.25;

txtIdResultado.value = Resultado;

}
*/
