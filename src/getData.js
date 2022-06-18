import axios from 'axios'

function getData() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('http://localhost:5000/')
    .then(response => {
        console.log('response', response.body)
        response.json()
    })
    .then(data => console.log(data))

    // axios.get('https://swapi.dev/api/', config)
    // // .then(res => res.json())
    // .then(res => {
    //     console.log('thiz ', res)
    //     document.getElementById('data').innerHTML = res.data.results[Math.floor(Math.random() * 10)].name
    // })
}

export default getData