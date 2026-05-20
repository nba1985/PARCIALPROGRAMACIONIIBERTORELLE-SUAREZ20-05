alert("¡Bienvenidos a nuestro Restaurante!");

console.log("La página del restaurante cargó correctamente");

document.querySelector("h1").innerText = "Restaurante Gourmet";


document.querySelector("header").onclick = function () {
    document.body.style.backgroundColor = "#fff3e0";
}


let producto1 = "Hamburguesa de Carne";
let descripcion1 = "Hamburguesa con carne, queso, tomate y lechuga.";
let precio1 = 4500;

document.querySelectorAll(".tarjeta h3")[0].innerHTML = producto1;

document.querySelectorAll(".tarjeta p")[0].innerHTML =
descripcion1 + "<br><strong>Precio: $" + precio1 + "</strong>";




let producto2 = "Hamburguesa de Pollo";
let descripcion2 = "Hamburguesa de pollo crispy con verduras frescas.";
let precio2 = 4200;

document.querySelectorAll(".tarjeta h3")[1].innerHTML = producto2;

document.querySelectorAll(".tarjeta p")[1].innerHTML =
descripcion2 + "<br><strong>Precio: $" + precio2 + "</strong>";




let producto3 = "Tallarines con Salsa";
let descripcion3 = "Pasta casera con salsa bolognesa.";
let precio3 = 3900;

document.querySelectorAll(".tarjeta h3")[2].innerHTML = producto3;

document.querySelectorAll(".tarjeta p")[2].innerHTML =
descripcion3 + "<br><strong>Precio: $" + precio3 + "</strong>";




document.querySelector(".formulario").onsubmit = function(event){

    event.preventDefault();

    let nombre = document.getElementById("name").value;
    let fecha = document.getElementById("date").value;
    let hora = document.getElementById("time").value;

    alert(
        "Reserva realizada correctamente\n\n" +
        "Nombre: " + nombre +
        "\nFecha: " + fecha +
        "\nHora: " + hora
    );

    console.log("Nueva reserva realizada");
}



document.getElementById("contacto").onclick = function(){

    this.style.backgroundColor = "#ffe0b2";

    console.log("Se hizo click en contacto");
}

