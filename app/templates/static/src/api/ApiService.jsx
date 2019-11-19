import axios from 'axios'

export default class ApiService {
    getRooms = (callback) => {
        return axios.get('http://127.0.0.1:5000/getRooms');
    }
}
