import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Message = () => {


    let data = useSelector((state) => state.counter.value);
  let navigate = useNavigate();
  useEffect(() => {
    if (data == null) {
      navigate("/login");
    }
  }, []);


  // localStorage.setItem("Name", "Ariz Khan");
  // localStorage.removeItem("Name");
  // let a = localStorage.getItem("Name");
  // console.log(a);

  // sessionStorage.setItem("key", "value");
  // sessionStorage.setItem("name", "Saif");
  // let b = sessionStorage.getItem("name");
  // console.log(b);

  return <div>Message</div>;
};  

export default Message;
