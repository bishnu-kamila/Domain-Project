import React from "react"
const Dashbord = ()=>{
    return(
        <>
            <div className="">
                <h1 className="text-6xl font-bold  flex item-center justify-center mt-[50px]">Dashboard</h1>
                <div className="flex item-center justify-center mt-[70px]">
                    <div>
                    <div className="h-[200px] w-[200px] ml-[60px] bg-blue-400  justify-center items-center rounded-[40px]">
                        <img src="./HostelImgg.png" alt="" />
                        <h1 className="text-center font-white text-xl">
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
                    <div className="h-[200px] w-[200px]  ml-[60px]  justify-center items-center rounded-[40px]">

                        <img src="./notificationimg.png" alt="" />
                        <h1 className="text-center font-white text-xl"> 
                            Notification
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px] ml-[60px] mt-[50px] justify-center items-center rounded-[40px]">
                        <img src="./CanteenImg.png" alt="" />
                        <h1 className="text-center font-white text-xl">Canteen</h1>
                    </div>
                    </div>
                    <div>
                    <div className="h-[200px] w-[200px]  ml-[60px] justify-center items-center rounded-[40px]">
                        <img src="./Laundryy.png" alt="" />
                        <h1 className="text-center font-white text-xl">
                            Laundry
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px]  ml-[60px] mt-[50px] justify-center items-center rounded-[40px]">
                        <img src="./Feedback.png" alt="" />
                        <h1 className="text-center font-white text-xl">
                            Feedback
                        </h1>
                    </div>
                    </div>

                    <div>
                    <div className="h-[200px] w-[200px] bg-blue-200 ml-[60px] justify-center items-center rounded-[40px]">
                        <img src="./RoomImg.png" alt="" />
                        <h1 className="text-center font-white text-xl">
                            Room Info
                        </h1>
                    </div>
                    <div className="h-[200px] w-[200px]  ml-[60px] mt-[50px] justify-center items-center rounded-[40px]">
                        <img src="./PaymentImg.png" alt="" />
                        <h1 className="text-center font-white text-xl">
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