import "./App.css"
import Auth from "./pages/Auth/Auth.jsx";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import {Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import Chat from "./pages/chat/Chat";
import Admin from "./pages/admin/Admin";
import AdminLand from "./pages/admin/AdminLand";
import AdminUser from "./pages/admin/AdminUser";
import Adminposts from "./pages/admin/AdminPosts";

function App() {
  const user = useSelector((state)=>state.authReducer.authData)
  const admin = useSelector((state)=>state.authReducer.authAdmin)

  console.log(user,'userrrrrrrrrrrrrrrrr');
  console.log(admin,'adminnnnnnnnnnnnnnnn');
  return (
    <div className="App">
       {/* <div className='blur' style={{top: '-18%', right: '0'}}></div>
       <div className='blur' style={{top: '36%', left: '-8rem'}}></div> */}
    <Routes>
      <Route path= '/' element={user ? <Navigate to = "home"/> : <Navigate to = 'auth'/>} />
      <Route path= '/home' element= {user ? <Home/>: <Navigate to ='../auth'/>} />
      <Route path = "/auth" element={user ? <Navigate to ="../home" /> : <Auth />} />
      <Route path='/profile/:id' element={user? <Profile/> : <Navigate to = "../auth"/>}/>
      <Route path= '/chat' element= {user ? <Chat/>: <Navigate to ='../auth'/>} />
      <Route path= '/admin' element= {<Admin/>}/>
      <Route path= '/admin/user' element= {admin ? <AdminUser/> :  <Navigate to ='../admin'/>}/>
      <Route path= '/admin/posts' element= {admin ? <Adminposts/> :  <Navigate to ='../admin'/>}/>
    </Routes>
    </div>
  );
}

export default App;