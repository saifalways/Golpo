import React from "react";
import { Link } from "react-router-dom";

const LinkR = ({ icon, to, className }) => {
  return (
    <div>
      <Link className={` relative after:h-[165%] after:w-[300%] text-white   after:content[''] after:top-0 after:-left-6 after:rounded-l-2xl  after:absolute z-40 after:-z-10  after:-translate-y-3.5 before:h-[165%] before:w-[20%]  before:content[''] before:top-0 before:-right-18 before:rounded-l-2xl  before:absolute z-40 before:-z-10  before:-translate-y-3.5 before:z-50 ${className} `}  to={to} >
        {icon} 
      </Link>
    </div>
  );
};

export default LinkR;
