$("#btn3").click(function(){
const Toast = Swal.mixin({
  toast: true,
  type:'success',
  position: 'top-center',
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
Toast.fire({
  icon: 'success',
  title: 'El registro se a realizado con exito'
})
}); 