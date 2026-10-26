import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const GroupHeading = ({ name }) => {
  return ( 
      <div className="flex justify-between items-center py-3 mb-3 ">
        <h3 className="text-xl font-Poppins font-semibold text-black">
          {name}
        </h3>
        <PiDotsThreeVerticalBold className="text-btnclr text-xl cursor-pointer " />
      </div> 
  );
};

export default GroupHeading;
