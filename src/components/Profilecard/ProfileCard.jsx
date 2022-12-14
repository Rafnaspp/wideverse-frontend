import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import Cover from '../../img/Cover.png'
import Profile from '../../img/Profile.jpeg'
import {Link} from 'react-router-dom'
import './ProfileCard.scss'
import { useSelector } from 'react-redux'

const ProfileCard = ({location}) => {

  const {user} = useSelector((state)=>state.authReducer.authData)
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = "https://neostores.tk/images/"

  return (
   <div className="ProfileCard">
    <div className="ProfileImages">
      <img src={user.coverPicture? serverPublic + user.coverPicture : Cover }alt="" />
      <img src={user.profilePicture? serverPublic + user.profilePicture : Profile }alt="" />
    </div>
    <div className="ProfileName">
      <span>{user.firstname} {user.lastname}</span>
       <span>{user.worksAt? user.worksAt : "write about yourself"} </span>
    </div>
  <div className="followStatus">
    <hr />
    <div>
      <div className="follow">
        <span>{user.following.length}</span>
        <span>following</span>
      </div>
      <div className="vl"></div>
      <div className="follow">
        <span>{user.followers.length} </span>
        <span>followers</span>
      </div>
      {location === "profilePage" &&(
        <>
        <div className="vl">

        </div>
        <div className="follow">
          <span>{posts.filter((post)=> post.userId === user._id).length}</span>
          <span>Posts</span>
        </div>
        </>
      )}
    </div>
    <hr />
  </div>
  {location === "profilePage" ? "" : <span>
    <Link style={{textDecoration:"none", color:"inherit"}} to = {`/profile/${user._id}`}> 
    My Profile 
    </Link>
  </span>}
  
   </div>
  )
}

export default ProfileCard
