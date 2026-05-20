alert("Bienvenidos a nuestro restaurante");

console.log("Restaurante");

// Hamburguesa de carne
let nombreProducto = "Hamburguesa de Carne";
let descripcionProducto = "Una deliciosa hamburguesa con carne de res, lechuga, tomate y queso.";
let precioProducto = 3500;

// Hamburguesa de pollo
let nombreMenu = "Hamburguesa de Pollo";
let descripcionMenu = "Una sabrosa hamburguesa con pechuga de pollo, lechuga, tomate y queso.";
let precioMenu = 3200;

// Estado del menú
let estadoMenu = "Disponible";

// Mostrar producto principal
document.getElementById("NombreProducto").innerHTML = nombreProducto;

document.getElementById("DescripcionProducto").innerHTML = descripcionProducto;

document.getElementById("PrecioProducto").innerHTML = "Precio: $" + precioProducto;

// Mostrar información del menú
document.getElementById("Menu").innerHTML = nombreMenu;

document.getElementById("descripcionCurso").innerHTML = descripcionMenu;

document.getElementById("precioMenu").innerHTML = "Precio: $" + precioMenu;

document.getElementById("EstadoMenu").innerHTML = "Estado: " + estadoMenu;

// Cambiar fondo
document.body.style.backgroundColor = "brown";

