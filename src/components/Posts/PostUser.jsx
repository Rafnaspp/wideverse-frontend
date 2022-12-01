import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../Redux/actions/userAction'
import Profile from '../../img/Profile.jpeg'
import Comment from '../../img/comment.png'
import { createChat } from '../../Api/ChatRequest'

const User = ({person}) => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.authReducer.authData)
    const [following, setFollowing] =useState(person.followers.includes(user._id))
    const senderId = user._id
    const receiverId = person._id
    const serverPublic = "https://neostores.tk/images/"
    const handleFollow =()=>{
        following ?
        dispatch(unFollowUser(person._id, user)):
        dispatch(followUser(person._id, user))

        setFollowing((prev)=>!prev)
    }


    const addToChat = ()=>{
       const chatData ={
        senderId:user._id,
        recieverId:person._id
       }
       console.log(chatData);
        createChat(chatData)
    }

    return (
        <div className="Follower">
            <div>
                <img src={person.profilePicture? serverPublic + person.profilePicture : Profile} alt=""  className='followerImage' />
                
                <div className="name">
                    
                    <span>{person.username}</span>

                </div>
            </div>
           
        </div>
    )
}

export default User
