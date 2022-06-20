import axios from 'axios'

function getData() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('http://localhost:5000/', config).then(res => {
        console.log('rezzz', res.data)
        document.getElementById('data').innerHTML = res.data.user
    })
}

export default getData