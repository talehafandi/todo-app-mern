import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5003/api/v1/tasks'
})

export default instance