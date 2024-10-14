import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <>
            <div className="bg-blue h-[30px] w-fit flex ml-[20px]">
                <img className="h-[50px] w-[40px]" src="./src/images/images-removebg-preview.png" alt="" />
                <h1 className="text-black ml-[30px] mt-[10px] font-bold">Hostel Management System</h1>
                <div className="ml-[750px] mt-[10px]">
                    <a className="ml-[30px]" href="">Home</a>
                    <a className="ml-[30px]" href="">Education</a>
                    <a className="ml-[30px]" href="">About</a>
                </div>
                <div className="ml-[50px] mt-[10px]">
                    <a href=""><button>Sign-up</button></a>
                    <a className="ml-[20px]" href=""><button>Sign-in</button></a>
                </div>
            </div>
        </>
    )
}
export default Navbar;