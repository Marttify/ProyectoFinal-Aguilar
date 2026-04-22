/**
 * Muestra mensajes al usuario:
 * - Usa SweetAlert para mostrar alertas simples en pantalla
*/

function mostrarMensaje(msg) {
  Swal.fire({
    title: msg,
    icon: "success"
  });
}