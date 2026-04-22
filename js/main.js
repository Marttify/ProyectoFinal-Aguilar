/**
 * Maneja la inicialización y eventos:
 * - Carga datos y carrito al iniciar la página
 * - Renderiza productos y carrito
 * - Ejecuta la compra al hacer click en el botón
 * - Permite eliminar items del carrito
*/

document.addEventListener("DOMContentLoaded", async () => {
  await cargarDatos();
  cargarCarrito();
  renderTodo();
  renderCarrito();
});

document.getElementById("btnFinalizar").addEventListener("click", finalizarCompra);

function activarBotonesEliminar() {
  const botones = document.querySelectorAll(".btn-eliminar");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;

      carrito.splice(index, 1);
      guardarCarrito();
      renderCarrito();
    });
  });
}