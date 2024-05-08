let estado = "apagado";

/*capturo el sonido*/

let sonido_click = document.querySelector(".cat_click");
let sonido_encendido = document.querySelector(".cat_Encendido");

let cat = document.querySelector(".cat");
let cat_boton = document.querySelector(".cat_boton");

cat_boton.addEventListener("click", accion);

function accion () {
    if (estado == "apagado") {
        estado = "encendido";
        sonido()
        cat.classList.add("cat_activo");
    } else {
        estado = "apagado";
        sonido()
        cat.classList.remove("cat_activo");
    }
}

function sonido () {
    if (sonido_encendido.paused) {
        sonido_click.play()
        sonido_encendido.play()
    } else {
        sonido_click.play()
        sonido_encendido.pause()
    }
}