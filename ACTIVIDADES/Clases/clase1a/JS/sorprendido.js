let sorprendido = "apagado";

let encendido = document.querySelector("#sonido_encendido");
let click = document.querySelector("#sonido_click");
let sorpresa = document.querySelector(".sorpresa");
let boton = document.querySelector(".sorpresa_boton");

boton.addEventListener("click", accion);

function accion() {
    if (sorprendido == "apagado") {
        sorprendido = "encendido";
        sonido();
        sorpresa.classList.add("sorpresa_activo");
    } else {
        sorprendido = "apagado";
        sonido();
        sorpresa.classList.remove("sorpresa_activo");
    }
}

function sonido() {
    if (encendido.paused) {
        click.play()
        encendido.play()
    } else {
        click.play()
        encendido.pause()
    }
}