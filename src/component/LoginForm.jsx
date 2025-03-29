import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
const LoginForm =({setIsLoggedIn})=>{


    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"", password:""
    })
    function changeHandler(event){
        setFormData( (prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false)
    function submitHandler(event){
        event.preventDefault(),
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashbord")
    }
    return(
        <form action="" onSubmit={submitHandler}  className="flex flex-col w-full gap-y-4 mt-6">
            <label htmlFor="" className="w-full">
                <p className="text-[0.875rem] text-gray-5 mb-1 leading-[1.375rem]">
                    Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input 
                    required 
                    type="email" 
                    value={formData.email} 
                    onChange={changeHandler} 
                    placeholder="Enter email Id"
                    name="email"
                    className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-5"
                />

            </label>
            <label htmlFor="" className="w-full relative">
                <p className="text-[0.875rem] text-gray-5 mb-1 leading-[1.375rem]">
                    Password <sup className="text-pink-200">*</sup>
                </p>
                <input 
                    required 
                    type={showPassword? ("text") : ("password")}
                    value={formData.password} 
                    onChange={changeHandler} 
                    placeholder="Enter Password"
                    name="password"
                    className="bg-gray-800 rounded-[0.75rem] w-full p-[12px] text-gray-5"    
                />
                    <span onClick={() => setShowPassword((prev)=>!prev)} className="absolute right-3 top-[38px] cursor-pointer ">
                        {!showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                    
                    <Link to="#">
                        <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                            Forget Password
                        </p>
                    </Link>
            </label>

            <button className="bg-yellow-300 py-[8px] px-[12px] rounded-[8px] mt-3 font-medium text-gray-900">
                Sign In
            </button>
        </form>
    )
}

export default LoginForm