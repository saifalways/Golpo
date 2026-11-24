import React from "react";
import Image from "./Image";

const GroupMemberList = ({ name,image, bio,onClickForAdd,acceptBtn,calcleBtnType,onClickforCancel,cancelBtn,onClickforFriend }) => {
  return (
    <div className="flex items-center justify-between mt-3 mb-4 ml-4  ">
      <div className="flex gap-8 items-center  ">
        <div className="w-17.5 h-17.5 rounded-full bg-red-300 ">

        <Image className="rounded-full" src={image}  />
        </div>
        <div>
          <h4 className="text-4.5 font-Poppins font-semibold">{name}</h4>
          <p className="text-4 font-Poppins font-normal">{bio}</p>
        </div>
      </div> 
        <div >
          {
            calcleBtnType && 
            <button onClick={onClickforCancel}  className="w-21.75 h-7.5 bg-red-500 rounded-sm text-white text-xl font-Poppins font-semibold mx-0 cursor-pointer ">
          {cancelBtn}
        </button>
          }
        <button onClick={onClickForAdd}    className="w-21.75 h-7.5 bg-btnclr rounded-sm text-white text-xl font-Poppins font-semibold mx-5 cursor-pointer ">
          {acceptBtn}
        </button>
          </div> 
    </div>
  );
};

export default GroupMemberList;
