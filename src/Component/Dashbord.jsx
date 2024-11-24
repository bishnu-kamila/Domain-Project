import React from "react"
const Dashbord = ()=>{
    return(
        <>
            <div className="">
                <h1 className="text-6xl font-bold  flex item-center justify-center mt-[50px]">Dashboard</h1>
                <div className="flex item-center justify-center mt-[20px]">
                    <div className="h-[200px] w-[200px] bg-blue-700 flex item-center justify-center ">
                        <h1 className="text-center font-white">
                            Hostel
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-yellow-700 ml-[70px]">
                        <h1 className="text-center font-white">
                            Registration
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-red-700 ml-[70px]">
                        <h1 className="text-center font-white"> 
                            Notification
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-green-700 ml-[70px]">
                        <h1 className="text-center font-white">Canteen</h1>
                    </div>
                    <div className="h-[200px] w-[200px] bg-gray-700 ml-[70px]">
                        <h1 className="text-center font-white">
                            Laundry
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashbord