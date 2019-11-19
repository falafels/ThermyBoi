import axios from 'axios'

export default class ApiService {
    doSomething = (callback) => {
        axios.get('http://127.0.0.1:5000/hello')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            } )
    }
}
