import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="bg-blue h-[30px] w-full flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img
                        className="h-[50px] w-[40px]"
                        src="./src/images/images-removebg-preview.png"
                        alt=""
                    />
                    <h1 className="text-black ml-[20px] text-lg font-bold">
                        Hostel Management System
                    </h1>
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link to="/">Home</Link>
                    <a href="">Education</a>
                    <a href="">About</a>
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link
                        to="/signup"
                        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                    >
                        Sign-up
                    </Link>
                    <Link
                        to="/login"
                        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition duration-300 ml-[20px]"
                    >
                        Sign-in
                    </Link>
                </div>

                <div className="md:hidden">
                    <button className="text-white">☰</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
