/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//si veo una caja para rellenar, hay que tomar Id de archivo html. Entonces
	//tengo que buscar el Id con f12 o posicionarme en el elemento con "inspeccionar" (clic derecho)

	// 1° declarar variable
	var edadIngresado;
	var nombreIngresado;
	//2° Traer la variable (conmbiene hacer "de a uno" y probar)
	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;
	// primer paso para concatenar
	alert("Usted se llama "+nombreIngresado );
	alert("y tiene " +edadIngresada + " años");

	//acá termino la primera parte

	// segundo paso: la concatenación
	alert("Usted se llama " +nombreIngresado+ " y tiene " +edadIngresada + " años");

}

//declaro variable
//asigno valores: es la entrada de datos a traves de prompt, Id, etc.
//LOs espacios VAN EN EL LITERAL " "
