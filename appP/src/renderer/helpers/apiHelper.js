import axios from 'axios';

const serverUrl = 'http://api.riale-online.fr:8080/';

const instance = axios.create({
  baseURL: serverUrl,
});

export default instance;
