import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
      <>
        <div className="flex items-center justify-center h-screen ">
            
                <div className="border-2 bg-gray-300 px-10 py-10 rounded-3xl border-2 border-gray">
                    <h1 className="text-5xl font-semibold">Register</h1>
                    <p className="font-medium text-lg mt-4">Welcome Back !, Please enter your details</p>
                    <div className="mt-8">
                        <div>
                            <div className="flex">
                                <label className="font-medium text-lg border-grey-100 rounded-xl p-4 mt-1 ">Email</label>
                                <input className="w-full h-8 border-2 border-grey-100 rounded-xl p-4 mt-4 ml-8" type="email" placeholder="Enter yor Email_id" />
                            </div>
                            <div className="flex">
                                <label className="font-medium text-lg border-grey-100 rounded-xl p-4 mt-1">Password</label>
                                <input className="w-full h-8 border-2 border-grey-100 rounded-xl p-4 mt-4" type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div>
                            <Link to='/admin'><button className="mt-8 ml-[10px] bg-blue-300 rounded-md w-full h-8">Sign-Up</button><br></br></Link>
                            
                            <button className="mt-8 ml-[200px] w-[130px]">Reset</button>
                        </div>
                    </div>
                    
                </div>
            </div>
      </>
  )
}

export default Signup
