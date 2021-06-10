import axios from 'axios'

export const key = '49eb1d009beb996011f3e779f707a85ac60934fe'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
       
    }
})

export default api