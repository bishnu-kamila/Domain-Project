import React from "react"
const Dashbord = ()=>{
    return(
        <>
            <div>
                <h1 className="text-black font-xl">Dashboard</h1>
                <div>
                    <div className="h-[50px] w-[50px] bg-gray">
                        <h1 className="text-center font-white">
                            Hostel
                        </h1>
                    </div>
                    <div className="h-[50px] w-[50px] bg-gray">
                        <h1 className="text-center font-white">
                            Registration
                        </h1>
                    </div>
                    <div className="h-[50px] w-[50px] bg-gray">
                        <h1 className="text-center font-white"> 
                            Notification
                        </h1>
                    </div>
                    <div className="h-[50px] w-[50px] bg-gray">
                        <h1 className="text-center font-white">Canteen</h1>
                    </div>
                    <div className="h-[50px] w-[50px] bg-gray">
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