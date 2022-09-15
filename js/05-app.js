// Detectar si nuestra página se esta ejecutando en primer o segundo plano...
document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar la función para reproducir el video')
    } else {
        console.log('Pausar el video')
    }
})
