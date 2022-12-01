import axios from 'axios'

const API = axios.create({baseURL:"https://neostores.tk"})

export const getTimelinePosts =(id)=> API.get(`/post/${id}/timeline`)
export const likePost = (id, userId)=> API.put(`/post/${id}/like`, {userId:userId})
export const deletePost = (id, userId)=> API.delete(`/post/${id}/${userId}`)
export const getAllPosts = ()=> API.get('/post/allPost')