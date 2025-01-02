import React from "react";
import { Outlet } from "react-router-dom";
const Home = ()=>{
    return(
        <>
        <Navbar/>
            <Outlet/>

        <div >
            <img className="h-[650px] w-[1500px] mt-[20px]" src="./src/images/hostel.jpg" alt="" />
            
        </div>
        </>
    )
}
export default Home;