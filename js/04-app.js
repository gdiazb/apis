// ejecutar el sitio web en pantalla completa...

const abrirBtn = document.querySelector('#abrir-pantalla-completa')
const salirBrn = document.querySelector('#salir-pantalla-completa')


abrirBtn.addEventListener('click', pantallaCompleta)
salirBrn.addEventListener('click', cerrarPantallaCompleta)


function pantallaCompleta() {
    document.documentElement.requestFullscreen()
}

function cerrarPantallaCompleta() {
    document.exitFullscreen()
}
