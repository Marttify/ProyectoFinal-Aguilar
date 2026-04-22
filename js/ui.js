/**
 * Maneja todo lo visual:
 * - Muestra productos y servicios en pantalla
 * - Genera las cards con botón para agregar al carrito
 * - Renderiza el carrito con sus items
 * - Actualiza el total y muestra si está vacío
*/

function renderTodo() {
  renderItems(productos, "productosContainer");
  renderItems(servicios, "serviciosContainer");
}

function renderItems(lista, contenedorId) {
  const contenedor = document.getElementById(contenedorId);

  contenedor.innerHTML = "";

  lista.forEach(item => {
    contenedor.innerHTML += `
      <div class="card">
        ${item.img ? `<img class="card-img" src="${item.img}" alt="${item.nombre}">` : ''}
        <p class="categoria">${item.categoria}</p>
        <h3>${item.nombre}</h3>
        <p>$${item.precio}</p>
        <button onclick="agregarAlCarrito(${item.id})">
          Agregar
        </button>
      </div>
    `;
  });
}

function renderCarrito() {
  const contenedor = document.getElementById("carrito");

  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = `<p class="carrito-vacio">El carrito está vacío</p>`;
    document.getElementById("total").innerText = "0";
    return;
  }

  carrito.forEach((item, index) => {
    contenedor.innerHTML += `
      <div class="carrito-item">
        ${item.img ? `<img class="carrito-item-img" src="${item.img}" alt="${item.nombre}">` : ''}
        <div class="item-info">
          <h4>${item.nombre}</h4>
          <p class="categoria">${item.categoria}</p>
        </div>

        <div class="item-precio">
          $${item.precio}
        </div>

        <div class="item-acciones">
          <button class="btn-eliminar" data-index="${index}">
            ❌
          </button>
        </div>
      </div>
    `;
  });

  document.getElementById("total").innerText = calcularTotal();

  activarBotonesEliminar();
}