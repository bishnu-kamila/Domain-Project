import React from "react"
const Dashbord = ()=>{
    return(
        <>
            <div className="">
                <h1 className="text-6xl font-bold  flex item-center justify-center mt-[50px]">Dashboard</h1>
                <div className="flex item-center justify-center mt-[70px]">
                    <div>
                    <div className="h-[200px] w-[200px] ml-[60px] bg-blue-400 flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl">
                            Hostel
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-yellow-400 ml-[60px] mt-[50px] flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl">
                            Registration
                        </h1>
                    </div>
                    
                    </div>
                    <div>
                    <div className="h-[200px] w-[200px] bg-red-400 ml-[60px] flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl"> 
                            Notification
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-green-400 ml-[60px] mt-[50px] flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl">Canteen</h1>
                    </div>
                    </div>
                    <div>
                    <div className="h-[200px] w-[200px] bg-gray-400 ml-[60px] flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl">
                            Laundry
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-purple-700 ml-[60px] mt-[50px] flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl">
                            Feedback
                        </h1>
                    </div>
                    </div>

                    <div>
                    <div className="h-[200px] w-[200px] bg-blue-200 ml-[60px] flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl">
                            Room Info
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-lime-400 ml-[60px] mt-[50px] flex justify-center items-center rounded-[40px]">
                        <h1 className="text-center font-white text-4xl">
                            Payment
                        </h1>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashbord