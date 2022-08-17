const initialImage = document.getElementById('imag1')
const buta = document.getElementById('but1')
const buta1 = document.getElementById('but2')
const buta2 = document.getElementById('but3')
const buta3 = document.getElementById('but4')
const buta4 = document.getElementById('but5')

buta.addEventListener('click' , clicou)
buta1.addEventListener('click' , clicou2)
buta2.addEventListener('click' , clicou3)
buta3.addEventListener('click' , clicou4)
buta4.addEventListener('click' , clicou5)


function clicou() {
    initialImage.src = './R.jpg'
}

function clicou2() {
    initialImage.src = './OIP.jpg'
}

function clicou3() {
    initialImage.src = './imag5.jpg'
}
    
function clicou4() {
    initialImage.src = './poder.jpg'
}

function clicou5 () {
    initialImage.src = './drag.jpg'
    window.alert('Vitória Gloriosa sobre o Adversário')

}

