alert("Bienvenidos");

console.log("Restaurante");

let nombre = "pizza";
let descripcion = "pizza con salsa y queso";
let precio = 899;

let nombreplato = "cc";
let descripcionplato = "cc";
let precioplato = 75475;

document.getElementById("NombreProducto").innerHTML = nombre;
document.getElementById("DescripcionProducto").innerHTML = descripcion;
document.getElementById("PrecioProducto").innerHTML = "precio:$" + precio;

document.getElementById("Menu").innerHTML = Menu;
document.getElementById("descripcionCurso").innerHTML = descripcionMenu;
document.getElementById("precioMenu").innerHTML = "precio:$" + precioMenu;
document.getElementById("EstadoMenu").innerHTML = "Estado:" + estadoMenu;

    document.body.style.backgroundColor = "brown";

