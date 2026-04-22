let productos = [];
let servicios = [];
let carrito = [];


async function cargarDatos() {
  const resProd = await fetch("../data/productos.json");
  productos = await resProd.json();
  console.log(productos);

  const resServ = await fetch("../data/servicios.json");
  servicios = await resServ.json();
  console.log(servicios);
}