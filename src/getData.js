import axios from 'axios'

function getData() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('https://swapi.dev/api/people/', config)
    // .then(res => res.json())
    .then(res => {
        document.getElementById('data').innerHTML = res.data.results[Math.floor(Math.random() * 10)].name
    })
}

export default getData