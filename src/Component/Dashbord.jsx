import React from "react";
import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center mt-12">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 items-center justify-center">
        {/* Hostel Section */}
        <div className="flex flex-col items-center">
          <Link to="/hostel">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./HostelImgg.png" alt="Hostel" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Hostel</h1>
            </div>
          </Link>

          <Link to="/registration">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] mt-4 justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./Registration Img.png" alt="Registration" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Registration</h1>
            </div>
          </Link>
        </div>

        {/* Notification & Canteen Section */}
        <div className="flex flex-col items-center">
          <Link to="/notification">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./notificationimg.png" alt="Notification" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Notification</h1>
            </div>
          </Link>

          <Link to="/canteen">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] mt-4 justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./CanteenImg.png" alt="Canteen" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Canteen</h1>
            </div>
          </Link>
        </div>

        {/* Laundry & Feedback Section */}
        <div className="flex flex-col items-center">
          <Link to="/laundry">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./Laundryy.png" alt="Laundry" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Laundry</h1>
            </div>
          </Link>

          <Link to="/feedback">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] mt-4 justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./Feedback.png" alt="Feedback" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Feedback</h1>
            </div>
          </Link>
        </div>

        {/* Room Info & Payment Section */}
        <div className="flex flex-col items-center">
          <Link to="/roominfo">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./RoomImg.png" alt="Room Info" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Room Info</h1>
            </div>
          </Link>

          
        </div>

        <div className="flex flex-col items-center">

          <Link to="/payment">
            <div className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] mt-4 justify-center items-center rounded-[20px] sm:rounded-[40px] flex flex-col shadow-md hover:shadow-lg transition">
              <img src="./PaymentImg.png" alt="Payment" className="h-3/5 w-3/5" />
              <h1 className="text-center text-black text-sm sm:text-xl">Payment</h1>
            </div>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Dashbord;
  