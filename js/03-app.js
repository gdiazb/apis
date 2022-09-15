// Detectar si tenemos o no RED...

window.addEventListener('online', actualizarEstado)
window.addEventListener('offline', actualizarEstado)

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('estas conectado')
    } else {
        console.log('No estas conectado')
    }
}

actualizarEstado()