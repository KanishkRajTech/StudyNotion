import './App.css'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashbord'
import Navbar from './component/Navbar'
import { useState } from 'react'
import PrivateRoute from './component/PrivateRoute'
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-[100%]   bg-black flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/signup" element= {<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashbord" element= {
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
     
    </div>
  )
}

export default App
