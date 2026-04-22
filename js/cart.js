/** 
 * Maneja el carrito de forma simple:
 * - Guarda lo que agregás en el localStorage para que no se pierda
 * - Lo recupera cuando cargás la página
 * - Suma los precios para mostrar el total
 * - Permite vaciar el carrito al comprar
 * - Agrega productos o servicios al carrito
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

window.agregarAlCarrito = function (id) {
  const item = [...productos, ...servicios].find(i => i.id === id);

  carrito.push(item);

  guardarCarrito();
  renderCarrito();
};