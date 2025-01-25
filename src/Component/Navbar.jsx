import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="bg-blue h-[30px] w-full flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img className="h-[50px] w-[40px]" src="./src/images/images-removebg-preview.png" alt="" />
                    <h1 className="text-black ml-[20px] text-lg font-bold">Hostel Management System</h1>
                </div>

                {/* Navigation links for large screens */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/">Home</Link>
                    <a href="">Education</a>
                    <a href="">About</a>
                </div>

                {/* Sign-in and Sign-up links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/signup">Sign-up</Link>
                    <Link to="/login" className="ml-[20px]">Sign-in</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-white">☰</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
