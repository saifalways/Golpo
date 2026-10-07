import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Image from "../Componenet/Image";
import RegImg from "../assets/reg.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();

  const auth = getAuth();

  let [email, setemail] = useState("");
  let [name, setname] = useState("");
  let [password, setpassword] = useState("");

  let [errorEmail, seterrorEmail] = useState("");
  let [errorName, seterrorName] = useState("");
  let [errorPassword, seterrorPassword] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!-/:-@[-`{-~]).{6,}$/;

  let handleEmail = (e) => {
    setemail(e.target.value);
    seterrorEmail("");
  };

  let handleName = (e) => {
    setname(e.target.value);
    seterrorName("");
  };

  let handlePassword = (e) => {
    setpassword(e.target.value);
    seterrorPassword("");
  };

  let handleSignUp = () => {
    if (!email) {
      seterrorEmail("Enter a Email");
    } else if (!emailRegex.test(email)) {
      seterrorEmail("Enter a Valid Email");
    }
    if (!name) {
      seterrorName("Enter a Name");
    }
    if (!password) {
      seterrorPassword("Enter a Password");
    } else if (!passwordRegex.test(password)) {
      seterrorPassword(
        "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &).",
      );
    }
    if (
      email &&
      emailRegex.test(email) &&
      name &&
      password &&
      passwordRegex.test(password)
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          toast.success(`Registration Successfully
             verify your email to login`); 

          sendEmailVerification(auth.currentUser).then(() => {
            
            setTimeout(() => {
              navigate("/login");
            }, 2000);

          });

        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);

          if (errorCode.includes("auth/email-already-in-use")) {
            seterrorEmail("Email already used");
          }
        });
    }
  };

  return (
    <Grid container>
      <ToastContainer
        position="top-center"
        autoClose={2000}
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
              Get started with easily register
            </h1>
            <p className="font-Nunito text-xl  text-black/50 font-normal mt-4 mb-10 ">
              Free register and you can enjoy it
            </p>
            <TextField
              onChange={handleEmail}
              className="w-96 font-Nunito font-semibold"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            <p className=" pl-3 mt-2  text-[#ec5541] text-[15px] ">
              {errorEmail}
            </p>
            <TextField
              onChange={handleName}
              className="w-96 mt-10!  font-Nunito font-semibold "
              id="outlined-basic"
              label="Full name"
              variant="outlined"
            />
            <p className=" pl-3 mt-2  text-[#ec5541] text-[15px] ">
              {errorName}
            </p>
            <TextField
              onChange={handlePassword}
              className="w-96 font-Nunito font-semibold mt-12! "
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <p className=" pl-3 mt-2 text-[#ec5541] text-[15px] w-96 ">
              {errorPassword}
            </p>
            <Button
              onClick={handleSignUp}
              variant="contained"
              className=" capitalize! w-96 mt-12! mb-9! py-4.5! font-Nunito font-semibold  bg-btnclr! rounded-full! text-xl! "
            >
              Sign up
            </Button>
            <p className="ml-19 text-blueSec font-Sans font-light text-[14px]   ">
              Already have an account ?
              <span className="text-orange font-bold cursor-pointer ml-1.5 ">
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image src={RegImg} className=" w-full h-screen object-cover " />
      </Grid>
    </Grid>
  );
};

export default Registration;
