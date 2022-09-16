

const salida = document.querySelector('#salida')
const microfono = document.querySelector('#microfono')

microfono.addEventListener('click', ejecutarSpeechAPI)

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition
    const recgnition = new SpeechRecognition()

    recgnition.start()
    recgnition.onstart = function() {
        salida.classList.add('mostrar')
        salida.textContent = 'Escuchando..'
    }

    recgnition.onspeechend = function() {
        salida.textContent = 'Se dejó de grabar..'
        recgnition.stop()
    }

    recgnition.onresult = function(e) {
        const { confidence, transcript} = e.results[0][0]
        const speech = document.createElement('p')
        const seguridad = document.createElement('p')

        speech.innerHTML = `Grabado: ${transcript}`
        seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100) }%`
        salida.appendChild(speech)
        salida.appendChild(seguridad)

    }

}
