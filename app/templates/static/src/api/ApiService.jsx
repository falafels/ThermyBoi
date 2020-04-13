import API from './API';
import { string } from 'prop-types';

export default class ApiService {
    getTemp = () => {
        return API.get('/get');
    }

    getCurrentTemp = () => {
        return API.get('/getCurrentTemp');
    }

    postTemp = (temp) => {
        return API.post('/post', null,{ params: {
            'temp': temp
          }});
    }
}
