import axios from 'axios'

const API = axios.create({baseUrl:process.env.baseURL})
console.log('api messagesssss');
export const getMessages = (id)=>  API.get(`/message/${id}`)
export const addMessage = (data) => API.post('/message/', data)