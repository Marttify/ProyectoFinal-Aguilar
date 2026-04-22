/**
 * Maneja los datos base de la app:
 * - Guarda productos, servicios y el carrito en arrays
 * - Trae los datos desde archivos JSON
 * - Los carga al iniciar para poder usarlos en la app
*/

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