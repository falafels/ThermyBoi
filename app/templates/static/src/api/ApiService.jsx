import API from './API';
import { string } from 'prop-types';

export default class ApiService {
    getTemp = () => {
        return API.get('/get');
    }

    postTemp = (temp) => {
        return API.post('/post', null,{ params: {
            'temp': temp
          }});
    }
}
