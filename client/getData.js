import axios from 'axios'

function getData() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    axios.get('http://localhost:5000/goals', config).then(res => {
        console.log('rezzz', res.data[0].name)
        for (let i=0; i<res.data.length; i++) {
            console.log('hey')
            document.getElementById('data').innerHTML = res.data[i].name
        }
    })
    // axios.get('http://localhost:5000/', config).then(res => {
    //     console.log('rezzz', res.data)
    //     document.getElementById('data').innerHTML = res.data.user
    // })
}

export default getData