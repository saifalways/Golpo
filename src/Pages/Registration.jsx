import React from "react";
import Grid from "@mui/material/Grid";
import Image from "../Componenet/Image";
import RegImg from "../assets/reg.png";
import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';




const Registration = () => {
  return (
    <Grid container  >
      <Grid size={6}>
       <div className="flex items-center justify-center h-full pl-80 ">
          <div className="flex flex-col">
             <h1 className="font-Nunito text-4xl text-headclr font-bold ">Get started with easily register</h1>
             <p className="font-Nunito text-xl  text-black/50 font-normal mt-4 mb-10 ">Free register and you can enjoy it</p>
             <TextField className="w-96  mb-10!"  id="outlined-basic" label="Email Address" variant="outlined" />        
             <TextField className="w-96 mb-10!  "  id="outlined-basic" label="Full name" variant="outlined" />        
             <TextField className="w-96 "  id="outlined-basic" label="Password" variant="outlined" /> 
             <Button variant="contained" className=" capitalize! w-96 mt-12! mb-9! py-4.5! font-Nunito font-semibold  bg-btnclr! rounded-full! text-xl! ">Sign up</Button>   
             <p className=  "ml-19 text-blueSec font-Sans font-light text-[14px]   ">Already  have an account ?<span className="text-orange font-bold  " > Sign In</span></p>
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
