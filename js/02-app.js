
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting) {
            console.log('Ya está visible')
        } else {
            console.log('Ya NO está visisble')
        }
    })

    observer.observe(document.querySelector('.premium'))
})