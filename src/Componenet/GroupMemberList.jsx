import React from "react";

const GroupMemberList = ({ name, bio }) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex gap-8 items-center">
        <div className="w-17.5 h-17.5 rounded-full bg-red-300"></div>
      <div>
        <h4 className="text-4.5 font-Poppins font-semibold">{name}</h4>
        <p className="text-4 font-Poppins font-normal">{bio}</p>
      </div>
      </div>
      <div>
        <button className="w-21.75 h-7.5 bg-btnclr rounded-sm text-white text-xl font-Poppins font-semibold ">
          Join
        </button>
      </div>
    </div>
  );
};

export default GroupMemberList;
