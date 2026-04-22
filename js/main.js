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