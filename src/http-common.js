import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost/sistemaDeInventario/public/api',
  headers: { 'Content-type': 'application/json' }
})
