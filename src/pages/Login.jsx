import React from 'react'
import Template from '../component/Template'
import loginImg from "../assets/Login.png"
const Login = ({setIsLoggedIn}) => {
  return (
    <Template 
      title="Welcome Back"
      desc1="Build skill for today, tomorrow, and beyond."
      desc2="Education to futrure-proof your carear."
      image={loginImg}
      setIsLoggedIn={setIsLoggedIn}
      formtype="login"
    />
  )
}

export default Login