import generateJoke from './generate.joke'
import './styles/main.css'
import pic from './assets/pic.jpg'

const greenImg = document.getElementById('greenImg')
greenImg.src = pic

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

console.log(generateJoke())