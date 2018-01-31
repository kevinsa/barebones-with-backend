import axios from 'axios'
import Storage from './storage'

export const LoginUser = (user) => {
    const storage = new Storage();
    const token = storage.getAuthToken()
    const config = {}

    if(token) {
        config.headers = { 'Authorization': 'bearer ' + token.id_token }
    }

    return axios.post('/api/login', user, config);
}
