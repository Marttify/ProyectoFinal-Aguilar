/**
 * Muestra mensajes al usuario:
 * - Usa SweetAlert para mostrar alertas simples en pantalla
*/

function mostrarMensaje(msg) {
  Swal.fire({
    title: msg,
    icon: "success",
    background: "#e6ffed",
    color: "#1b5e20",
    confirmButtonColor: "#2e7d32"
  });
}