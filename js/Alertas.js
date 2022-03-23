function enviar(){
Swal.fire({
  title: 'Esta seguro?',
  text: "Recuerda completar toda la info!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si, Enviar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Enviado!',
      'Tu Respuesta Ha sido Registrada.',
      'success'
    )
  }
})}
function Solicitar(){
Swal.fire({
  title: 'Esta seguro?',
  text: "Recuerda completar toda la info!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si, Enviar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Solicitada!',
      'Tu Respuesta Ha sido Registrada.',
      'success'
    )
  }
})}

function crear(){
Swal.fire({
  title: 'Esta seguro?',
  text: "Recuerda completar toda la info!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si, Crear!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Insumo Creado!',
      'El Insumo Ha Sido Registrado.',
      'success'
    )
  }
})}

function eliminar(){
Swal.fire({
  title: 'Esta seguro?',
  text: "Recuerda que es irreversible!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si,Eliminar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Eliminado!',
      'Se Elimino con exito.',
      'success'
    )
  }
})}

function registrarE(){
Swal.fire({
  title: 'Esta seguro?',
  text: "Recuerda Validar Toda La Info!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si,Registrar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Entrada Registrada!',
      'Se Guardo con exito.',
      'success'
    )
  }
})}

function registrarS(){
Swal.fire({
  title: 'Esta seguro?',
  text: "Recuerda Validar Toda La Info!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'si,Registrar!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Salida Registrada!',
      'Se Guardo con exito.',
      'success'
    )
  }
})}


function cambios(){
  Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
}