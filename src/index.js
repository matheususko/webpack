import './styles.scss'
import img from './img.jpg'

function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'My Title 2'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image(1200,800)
    elemImg.src =  img
    return elemImg
}

document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())