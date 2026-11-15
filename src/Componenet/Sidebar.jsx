import React, { useEffect, useState } from "react";
import Image from "../Componenet/Image";
import { MdOutlineHome } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoLogOut } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import LinkR from "./LinkR";
import { IoCloudUpload } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const Sidebar = () => {
  const db = getDatabase();
  const auth = getAuth();
  const navigate = useNavigate();
  let Location = useLocation();
  let [allUser, setallUser] = useState([]);
  let data = useSelector((state) => state.counter.value.uid);

  let handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("click");
        navigate("/login");
        localStorage.removeItem("userinfo");
      })
      .catch((error) => {
        console.log(error.name);
      });
  };

  useEffect(() => {
    const starCountRef = ref(db, "allusers");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (data == item.val().uid ) {
          arr.push(item.val());
        }
        console.log();
      });
      setallUser(arr);
    });
  }, []);

  // console.log(allUser);

  let active = Location.pathname.replace("/root/", "");

  return (
    <div className="  flex flex-col justify-around items-center w-[85%] mx-auto h-[93vh] bg-[#5F35F5] rounded-[20px] mt-8">
      <div className="flex flex-col items-center gap-23">
        {allUser.map((item) => (
          <div className=" group relative  cursor-pointer w-24 h-24 bg-red-100 rounded-full">
            {/* <Image > */}
            <div className="absolute top-0 left-0 w-full h-full rounded-full  group-hover:bg-black/30 duration-500 flex items-center justify-center ">
              <IoCloudUpload className="text-xl   text-transparent group-hover:text-white duration-500 " />
            </div>
            <h2 className="mt-28 text-center text-white font-Poppins text-[16px] ">
              {item.displayname}
            </h2>
          </div>
        ))}
        <div className="flex flex-col gap-14">
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
        <IoLogOut
          onClick={handleLogout}
          className="text-5xl text-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
