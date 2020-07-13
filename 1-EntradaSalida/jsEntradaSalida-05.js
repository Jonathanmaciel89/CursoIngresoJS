/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edadIngresado;
	var nombreIngresado;

	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;
// primer paso concatenar
	alert("Usted se llama "+nombreIngresado );
	alert("y tiene " +edadIngresada + " años");

	// segundo paso
	alert("Usted se llama " +nombreIngresado+ " y tiene " +edadIngresada + " años");

}

//declaro variable
//asigno valores: es la entrada de datos a traves de prompt, Id, etc.
