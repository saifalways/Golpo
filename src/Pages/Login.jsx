import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "../Componenet/Image";
import LogImg from "../assets/log.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let [errorEmail, seterrorEmail] = useState("");
  let [errorPassword, seterrorPassword] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

  let handleSignIn = () => {
    if (!email) {
      seterrorEmail("Enter a Email");
    } else if (!emailRegex.test(email)) {
      seterrorEmail("Enter a Valid Email");
    }
    if (!password) {
      seterrorPassword("Enter a Password");
    }
    if (email && emailRegex.test(email) && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

          if (errorCode.includes("auth/invalid-credential")) {
            seterrorPassword("Username or password wrong");
          } else if (errorCode.includes("auth/too-many-requests")) {
            toast.error("Try Later");
          }
        });
    }
  };

  let handleEmail = (e) => {
    setemail(e.target.value);
    seterrorEmail("");
  };

  let handlePassword = (e) => {
    setpassword(e.target.value);
    seterrorPassword("");
  };

  return (
    <Grid container>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Grid size={6}>
        <div className="flex items-center justify-center h-full pl-80 ">
          <div className="flex flex-col">
            <h1 className="font-Nunito text-4xl text-headclr font-bold ">
              Login to your account!
            </h1>
            <div className="flex items-center justify-center gap-x-1.5  mt-7 mb-10 border border-[#040158]/50 py-3 rounded  w-[50%] cursor-pointer ">
              <FcGoogle />
              <p className="font-Nunito text-[14px]  text-black font-semibold ">
                Login with Google
              </p>
            </div>

            <TextField
              onChange={handleEmail}
              className="w-90  font-Nunito font-semibold mb-7!"
              id="standard-basic"
              label="Email Address"
              variant="standard"
            />
            <p className=" pl-3  text-[#ec5541] text-[15px] ">{errorEmail}</p>
            <TextField
              onChange={handlePassword}
              className="w-90  font-Nunito font-semibold"
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
            />
            <p className=" pl-3 mt-2 text-[#ec5541] text-[15px] w-96 ">
              {errorPassword}
            </p>
            <Button
              onClick={handleSignIn}
              variant="contained"
              className=" capitalize! w-96 mt-12! mb-9! py-4.5! font-Nunito font-semibold  bg-btnclr!   text-xl! "
            >
              Login to Continue
            </Button>
            <p className="ml-19 text-blueSec font-Sans font-light text-[14px] rounded-3xl!   ">
              Don't have an account ?
              <span className="ml-1.5  text-orange font-bold cursor-pointer ">
                <Link to="/"> Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image src={LogImg} className=" w-full h-screen object-cover " />
      </Grid>
    </Grid>
  );
};

export default Registration;
