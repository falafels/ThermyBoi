import API from './API';
import { string } from 'prop-types';

export default class ApiService {

    getTemp = () => {
        return API.get('/get');
    }

    getCurrentTemp = () => {
        return API.get('/getCurrentTemp');
    }

    postTemp = (temp, token) => {
        return API.post('/post', null,{ 
            headers: {
                Authorization: 'Bearer '+ token,
            },
            params: {
            'temp': temp
          }});
    }

}
