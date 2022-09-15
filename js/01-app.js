const notificarBtn = document.querySelector('#notificar')

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
        .then( resultado => {
            console.log('el resultado es ', resultado)
        })
})

const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/logo-gd.png',
            body: 'Da click aquí 💖'
        })

        notificacion.onclick = function() {
            window.open('https://www.youtube.com/watch?v=5jRJPXHmosA')
        }
    }
})
