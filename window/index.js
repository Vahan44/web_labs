const minuse = document.getElementById('-')
const clone = document.getElementById('clone')
const close = document.getElementById('x')
const container = document.querySelector('.container')
let size = 'full'


minuse.onclick = async () => {

    document.body.innerHTML = "<button class = 'openModal'>open modal</button>"
    var openModal = await document.querySelector('.openModal')
    openModal.onclick = () => {
        document.body.innerHTML = ''
        document.body.appendChild(container)
    }
}




clone.onclick = () => {
    container.className = size == 'full' ? 'smallContainer' : 'container'
    size = size == 'full' ? 'small' : 'full'
}
close.onclick = () => document.body.innerHTML = ''

