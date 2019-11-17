import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertMoto = payload => api.post(`/moto`, payload)
export const getAllMotos = () => api.get(`/motos`)
export const updateMotoById = (id, payload) => api.put(`/moto/${id}`, payload)
export const deleteMotoById = id => api.delete(`/moto/${id}`)
export const getMotoById = id => api.get(`/moto/${id}`)

const apis = {
    insertMoto,
    getAllMotos,
    updateMotoById,
    deleteMotoById,
    getMotoById,
}

export default apis