import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsSubmitting(true);
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsLoggedIn(true);
      toast.success("Account Created Successfully!");
      navigate("/dashbord");
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div >
      
      
      {/* Account Type Selector */}
      <div className="flex bg-gray-800 p-1 gap-x-1 rounded-full max-w-max  mb-4 mt-4"> 
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-gray-300 hover:text-white"
          } py-2 px-5 rounded-full transition-all duration-200 text-sm font-medium`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-gray-300 hover:text-white"
          } py-2 px-5 rounded-full transition-all duration-200 text-sm font-medium`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="space-y-5">
        {/* First and Last Name */}
        <div className="flex gap-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email address" 
            value={formData.email}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Password */}
        <div className="flex gap-x-4">
          <div className="w-full relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Create Password <span className="text-red-500">*</span>
            </label>
            <input 
              required 
              type={showPassword ? "text" : "password"}
              value={formData.password} 
              onChange={changeHandler} 
              placeholder="Enter Password"
              name="password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
            />
            <span 
              onClick={() => setShowPassword((prev) => !prev)} 
              className="absolute right-3 top-[38px] cursor-pointer text-gray-400 hover:text-gray-200"
            >
              {!showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>

          <div className="w-full relative">
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input 
              required 
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword} 
              onChange={changeHandler} 
              placeholder="Confirm Password"
              name="confirmPassword"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
            />
            <span 
              onClick={() => setShowConfirmPassword((prev) => !prev)} 
              className="absolute right-3 top-[38px] cursor-pointer text-gray-400 hover:text-gray-200"
            >
              {!showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
            </span>
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-medium text-gray-900 mt-3 transition-all ${
            isSubmitting 
              ? 'bg-yellow-400 cursor-not-allowed' 
              : 'bg-yellow-300 hover:bg-yellow-400 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>
      </form>

      <div className="mt-3 text-center text-sm text-gray-400">
        Already have an account?{' '}
        <button 
          onClick={() => navigate("/login")} 
          className="text-blue-400 hover:text-blue-300 font-medium"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignupForm;