/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

