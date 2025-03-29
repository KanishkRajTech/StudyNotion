import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast"
const Navbar=(props) =>{
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto"> 
            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>

            <nav>
                <ul className="flex gap-x-6 text-white font-bold">
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* login singup logout Dashboard */}
            <div className="flex items-center gap-x-4 text-white">
                { !isLoggedIn  &&
                    <Link to="/login">
                        <button className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500 font-semibold">
                            Login
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500 font-semibold">
                            Signup
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/" className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500 font-semibold">
                        <button onClick={ () => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashbord">
                        <button className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500 font-semibold">
                            Dashbord
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;