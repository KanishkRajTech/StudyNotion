import React from 'react'
import Template from '../component/Template'
import sigupImg from "../assets/signup.png"
const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      image={sigupImg}
      setIsLoggedIn={setIsLoggedIn}
      formtype="signup"
    />
  )
}

export default Signup