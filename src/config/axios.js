import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: 'https://json-server-crudredux.onrender.com'
})

export default clienteAxios