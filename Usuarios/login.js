$("#log1").click(function validar(){
    var	correo= document.getElementById('correo').value;
	var contraseña= document.getElementById('contraseña').value;

	if (correo.length <1) {
		Swal.fire(
  		'Error de ingreso',
  		'Porfavor ingrese su usuario',
  		'error'); 
		return false;

	}



	else{ 
		if(contraseña.length<1){
			Swal.fire(
  		'Error de ingreso',
  		'Porfavor ingrese su contraseña',
  		'error'); 
			return false; 
		}
	}
	if(correo=== 'juang25@gmail.com' && contraseña==='adm123'){
	Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Ingreso correcto',
  showConfirmButton: false,
  timer: 15000
});

		window.location="../indexadmin.html"; 
	}
	
	else
		
		if (correo ==='luisr33@gmail.com'&& contraseña === 'pro123') {
			Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Ingreso correcto',
  showConfirmButton: false,
  timer: 15000
});

			window.location="../indexProduccion.html ";

		}

	else
		
		if (correo ==='fredyb17@gmail.com'&& contraseña === 'pev123') {
			Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Ingreso correcto',
  showConfirmButton: false,
  timer: 15000
});

			window.location="../indexPedidos_Ventas.html ";

		}

	else
		
		if (correo ==='miguelp35@gmail.com'&& contraseña === 'inv123') {
			Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Ingreso correcto',
  showConfirmButton: false,
  timer: 15000
});

			window.location="../indexInventario.html ";

		}

	else
		
		if (correo ==='sarag25@gmail.com'&& contraseña === 'cli123') {
			Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Ingreso correcto',
  showConfirmButton: false,
  timer: 15000
});

			window.location="../indexCliente.html ";

		}
		else{
		Swal.fire(
  		'INCORRECTO!',
  		'Porfavor verifique su usuario o contraseña',
  		'warning'); 
		return false;  
		}

	});
