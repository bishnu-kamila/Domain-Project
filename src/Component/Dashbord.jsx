import React from "react";
import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold flex items-center justify-center mt-[50px]">
        Dashboard
      </h1>
      <div className="flex items-center justify-center mt-[70px] flex-wrap gap-[50px]">
        <div>
          <Link to="/hostel">
            <div className="h-[200px] w-[200px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./HostelImgg.png" alt="Hostel" />
              <h1 className="text-center text-black text-xl">Hostel</h1>
            </div>
          </Link>

          <Link to="/registration">
            <div className="h-[200px] w-[200px] mt-[50px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./Registration Img.png" alt="Registration" />
              <h1 className="text-center text-black text-xl">Registration</h1>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/notification">
            <div className="h-[200px] w-[200px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./notificationimg.png" alt="Notification" />
              <h1 className="text-center text-black text-xl">Notification</h1>
            </div>
          </Link>

          <Link to="/canteen">
            <div className="h-[200px] w-[200px] mt-[50px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./CanteenImg.png" alt="Canteen" />
              <h1 className="text-center text-black text-xl">Canteen</h1>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/laundry">
            <div className="h-[200px] w-[200px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./Laundryy.png" alt="Laundry" />
              <h1 className="text-center text-black text-xl">Laundry</h1>
            </div>
          </Link>

          <Link to="/feedback">
            <div className="h-[200px] w-[200px] mt-[50px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./Feedback.png" alt="Feedback" />
              <h1 className="text-center text-black text-xl">Feedback</h1>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/room-info">
            <div className="h-[200px] w-[200px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./RoomImg.png" alt="Room Info" />
              <h1 className="text-center text-black text-xl">Room Info</h1>
            </div>
          </Link>

          <Link to="/payment">
            <div className="h-[200px] w-[200px] mt-[50px] justify-center items-center rounded-[40px] flex flex-col">
              <img src="./PaymentImg.png" alt="Payment" />
              <h1 className="text-center text-black text-xl">Payment</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
