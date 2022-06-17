import getData from './getData.js'
import './styles/main.css'
import pic from './assets/pic.jpg'

const greenImg = document.getElementById('greenImg')
greenImg.src = pic

const dataBtn = document.getElementById('dataBtn')
dataBtn.addEventListener('click', getData)

console.log(getData())