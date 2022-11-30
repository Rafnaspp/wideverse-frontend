import axios from 'axios'
import { applyMiddleware } from 'redux'

const API = axios.create({baseUrl:process.env.baseURL})

export const createChat = (data) => API.post('/chat' ,data)

export const userChats = (id) => API.get(`/chat/${id}`)


