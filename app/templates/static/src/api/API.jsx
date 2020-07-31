import axios from 'axios';

let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:5000/' : 'https://flask-server-dot-thermyboi.appspot.com/';

export default axios.create({
  baseURL: url
});
