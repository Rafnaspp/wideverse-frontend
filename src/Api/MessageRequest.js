import axios from 'axios'

const API = axios.create({baseUrl:"https://neostores.tk"})
console.log('api messagesssss');
export const getMessages = (id)=>  API.get(`/message/${id}`)
export const addMessage = (data) => API.post('/message/', data)