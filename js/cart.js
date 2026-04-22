/** Documentacion:
 * guarda el carrito en el Storage cada vez que se agrega o elimina un item, y lo carga al iniciar la página
 */
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const data = localStorage.getItem("carrito");
  if (data) carrito = JSON.parse(data);
}

function calcularTotal() {
  return carrito.reduce((acc, item) => acc + item.precio, 0);
}

function finalizarCompra() {
  if (carrito.length === 0) {
    mostrarMensaje("El carrito está vacío");
    return;
  }

  carrito = [];
  guardarCarrito();
  renderCarrito();

  mostrarMensaje("Compra realizada con éxito");
}

window.agregarAlCarrito = function(id) {
  const item = [...productos, ...servicios].find(i => i.id === id);

  carrito.push(item);

  guardarCarrito();
  renderCarrito();
};