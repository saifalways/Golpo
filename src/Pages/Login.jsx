import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "../Componenet/Image";
import LogImg from "../assets/log.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { FaAngleLeft } from "react-icons/fa6";
const Registration = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");

  let [errorEmail, seterrorEmail] = useState("");
  let [errorPassword, seterrorPassword] = useState("");

  let [forgetErrorPassword, setforgetErrorPassword] = useState("");

  let [resetEmail, setreserEmail] = useState("");

  let [forgetPassword, setforgetPassword] = useState(false);

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

          if (userCredential.user.emailVerified) {
            navigate("/home");
          } else {
            toast.error("Verify your email to login");
          }

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

  let handleForgertPassword = () => {
    setforgetPassword(true);
  };

  let handleBack = () => {
    setforgetPassword(false);
  };

  let HandleresetEmail = (e) => {
    setreserEmail(e.target.value);
    setforgetErrorPassword("");
  };

  let handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  let forgetContinue = () => {
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        toast.success("Check Your Email for Reset");
        setforgetPassword(false);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode.includes("auth/missing-email")) {
          setforgetErrorPassword("Enter a email for sending code");
        }
        if (errorCode.includes("auth/invalid-email")) {
          setforgetErrorPassword("Enter a valid email for sending code");
        }

        // ..
      });
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
            <div
              onClick={handleGoogle}
              className="flex items-center justify-center gap-x-1.5  mt-7 mb-10 border border-[#040158]/50 py-3 rounded  w-[50%] cursor-pointer "
            >
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
              className=" capitalize! w-96 mt-10! mb-2.5! py-4.5! font-Nunito font-semibold  bg-btnclr!   text-xl! "
            >
              Login to Continue
            </Button>
            <Button
              onClick={handleForgertPassword}
              variant="contained"
              className=" capitalize! w-96 border-0! shadow-none! hover:bg-[#F2F2F2]! text-[16px]!  mb-9! py-4.5! font-Nunito font-semibold  bg-transparent! text-headclr!  text-xl! "
            >
              Forgotten Password?
            </Button>

            {forgetPassword && (
              <div className="absolute top-0 left-0 bg-black/50 w-full h-screen z-10 flex items-center justify-center ">
                <div className=" relative w-[600px] h-[420px] bg-white flex flex-col justify-center items-center">
                  <FaAngleLeft
                    onClick={handleBack}
                    className="cursor-pointer absolute top-4 left-3.5 text-2xl p-2 hover:bg-[#F2F2F2]   w-[40px] h-[40px] rounded-full "
                  />

                  <h3 className="capitalize text-center pb-3 font-Nunito font-semibold   text-headclr  text-2xl">
                    Find your account
                  </h3>
                  <p className="capitalize text-center pb-4 text-[15px]   font-Nunito font-semibold  bg-transparent text-headclr  text-2xl">
                    Enter your mobile number or email address.
                  </p>
                  <TextField
                    onChange={HandleresetEmail}
                    id="outlined-basic"
                    label="Email address"
                    variant="outlined"
                    className="w-88"
                  />

                  <p className=" pl-3 mt-2  text-[#ec5541] text-[15px] ">
                    {forgetErrorPassword}{" "}
                  </p>

                  <Button
                    onClick={forgetContinue}
                    className="mt-4! "
                    variant="contained"
                    size="medium"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

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
