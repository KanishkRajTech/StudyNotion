import React from "react";
import Signup from "../pages/Signup";
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";
const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) =>{
    
    return (
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between">
            <div className="w-11/12 max-w-[450px] mx-0 text-white">
                <h1 className="text-gray-500 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
                    <span className="text-gray-500">{desc1}</span> <br />
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {formtype==="signup" ? (<SignupForm  setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex w-full items-center my-3 gap-x-2">
                    <div className="h-[1px] w-full bg-gray-600"></div>
                    <p>OR</p> 
                    <div className="h-[1px] w-full bg-gray-600"></div>
                </div>
                
                <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-gray-300 border-gray-700 border px-[12px] py-[8px] gap-x-2 mt-3">
                    <FcGoogle />
                    <p>Sing up with Google</p>
                </button>
            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} alt="" width={558} height={504} loading="lazy"/>
                <img src={image} alt="" width={558} height={504} loading="lazy" className="absolute -top-4 right-4 "/>
            </div>
        </div>
    )
}
export default Template;