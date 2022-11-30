import axios from 'axios'

const API = axios.create({baseUrl:process.env.baseURL})

export const uploadImage = (data) => API.post('/upload/', data)

export const uploadPost = (data) => API.post('/post', data)

export const addComment = (data) => API.post('/post/comment', data)