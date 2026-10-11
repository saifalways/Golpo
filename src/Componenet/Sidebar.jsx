import React from "react";
import Image from "../Componenet/Image";
import { MdOutlineHome } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoLogOut } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import LinkR from "./LinkR";

const Sidebar = () => {
  let Location = useLocation();
  let active = Location.pathname.replace("/root/", "");
  console.log(active);

  return (
    <div className="  flex flex-col   justify-around items-center w-[85%] mx-auto h-[93vh] bg-[#5F35F5] rounded-[20px] mt-8">
      <div className="flex flex-col items-center gap-18">
        <div className="  cursor-pointer  w-24 h-24 bg-red-100 rounded-full">
          {/* <Image > */}
        </div>
        <div className="   flex flex-col gap-14">
          <LinkR
            className={`${active == "home" && "after:bg-white  before:bg-[#5F35F5]"}`}
            to="/root/home"
            icon=<MdOutlineHome
              className={`text-5xl cursor-pointer ${active == "home" ? "text-[#5F35F5]" : "text-[#BAD1FF]"}   `}
            />
          />
          <LinkR
            className={`${active == "message" && "after:bg-white  before:bg-[#5F35F5]"}`}
            to="/root/message"
            icon=<LuMessageCircleMore
              className={`text-5xl cursor-pointer  ${active == "message" ? "text-[#5F35F5]" : "text-[#BAD1FF]"}  `}
            />
          />
          <LinkR
            className={`${active == "notification" && "after:bg-white before:bg-[#5F35F5] "}`}
            to="/root/notification"
            icon=<IoMdNotificationsOutline
              className={`text-5xl cursor-pointer  ${active == "notification" ? "text-[#5F35F5]" : "text-[#BAD1FF]"}  `}
            />
          />
          <LinkR
            className={`${active == "setting" && "after:bg-white  before:bg-[#5F35F5]"}`}
            to="/root/setting"
            icon=<IoSettingsOutline
              className={`text-5xl   cursor-pointer ${active == "setting" ? "text-[#5F35F5]" : "text-[#BAD1FF]"}   `}
            />
          />
        </div>
      </div>
      <div>
        <IoLogOut className="text-5xl text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default Sidebar;
