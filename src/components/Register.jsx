import React from "react";

import bgimg from "../assets/sekil.png";
import Navbar from "./navbar";
import {  Label } from "@mui/icons-material";

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import "./Form.css"
import { Button } from "@mui/material";

function Register() {
  return <div>
     
<Navbar/>
{/* <div className="form"><div >
        <img src={bgimg} alt="" />
      </div>
      <div className="create"> 
            <h3>Create account</h3>
            
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField label="First Name*" color="black" focused  />
      <TextField label="Last Name*" color="black" focused />
      

    </Box>
    <Box component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
    
    <TextField label="Email*" color="black" focused  type="email"/>
      <TextField label="Date*" color="black" focused type="date"/>
      
    </Box>
    
    <Box component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">
    
    <TextField label="Password*" color="black" focused  type="password"/>
      <TextField label="Confirm Password*" color="black" focused type="password"/>
      
    </Box>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" className="btncheck" />
    <Button variant="contained">Create account</Button>

      </div></div> */}
      
  </div>;
}

export default Register;
