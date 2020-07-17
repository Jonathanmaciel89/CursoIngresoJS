/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	var numeroUno;
	var numeroDos;
//como necesito una suma, me conviene crear una var suma
	var suma;
	numeroUno = txtIdNumeroUno.value; //esto vale "tanto" (con comilla), no es un valor entero.
	numeroDos = txtIdNumeroDos.value;

//tengo que pasar a entero con parseInt (es convertir un texto en numero)

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert(suma);	
}


	function restar()

{
	var numeroUno;
	var numeroDos;
	var restar

	numeroUno = txtIdNumeroUno.value; 
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	restar = numeroUno - numeroDos;

	alert(restar);	

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar

	numeroUno = txtIdNumeroUno.value; 
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicar = numeroUno * numeroDos;

	alert(multiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividir

	numeroUno = txtIdNumeroUno.value; 
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	dividir = numeroUno / numeroDos;

	alert(dividir);
}

