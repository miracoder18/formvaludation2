import React, { useState } from "react";

import bgimg from "../assets/sekil.png";
import Navbar from "./navbar";
import { Label } from "@mui/icons-material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./Form.css";
import { Button } from "@mui/material";
import axios from "axios";

function Register({sekil,setsekil}) {
  const [formdata, setformdata] = useState({
    fname: "",
    sname: "",
    email: "",
    date: "",
    pass: "",
    cpass: "",
  });
  const [error, seterror] = useState("");
  const [valid, setvalid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    let errors = {};
    let isvalid = true;
    if (formdata.fname === "" || formdata.fname === null) {
      isvalid = false;
      errors.fname = "first name required";
    }
    if (formdata.sname === "" || formdata.sname === null) {
      isvalid = false;
      errors.sname = "last name required";
    }
    if (formdata.email === "" || formdata.email === null) {
      isvalid = false;
      errors.email = "email required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      isvalid = false;
      errors.email = "email not valid";
    }
    if (formdata.date === "" || formdata.date === null) {
      isvalid = false;
      errors.date = "date required";
    }
    if (formdata.pass === "" || formdata.pass === null) {
      isvalid = false;
      errors.pass = "password required";
    } else if (formdata.pass.length < 6) {
      isvalid = false;
      errors.pass = "password length at least 6 char";
    }
    if (formdata.cpass !== formdata.pass) {
      isvalid = false;
      errors.cpass = "password does not match";
    } else if (formdata.cpass.length < 6) {
      isvalid = false;
      errors.cpass = "confirm password length at least 6 char";
    }
    if (Object.keys(errors).length === 0) {
      axios
        .post("https://66cdddb88ca9aa6c8ccbf803.mockapi.io/users", formdata)
        .then((res) => {
          console.log(formdata);
        });
    }
    seterror(errors);
    setvalid(isvalid);
  };

  return (
 
    <div> 
      <div>
       
        <div className="form">
          <div>
            <img src={bgimg} alt="" />
          </div>
         

          <div className="create" onSubmit={handleSubmit}>
            {/* {valid ? (
              <></>
            ) : (
              <span className="danger">
                {error.fname},{error.sname},{error.email},{error.date},
                {error.pass},{error.cpass}
              </span>
            )} */}
            <h3>Create account</h3>

            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
         
              <TextField
                label="First Name*"
                color="black"
                focused
                
                onChange={(e) => {
                  setformdata({ ...formdata, fname: e.target.value });
                }}
              />
               {valid ? (
              <></>
            ) : (
              <span  className="danger">
                {error.fname}
              </span>
            )}
            
              <TextField
                label="Last Name*"
                color="black"
                focused
                onChange={(e) => {
                  setformdata({ ...formdata, sname: e.target.value });
                }}
              />
                {valid ? (
              <></>
            ) : (
              <span className="danger">
                {error.sname}
              </span>
            )}
                
            </Box>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Email*"
                color="black"
                focused
                type="email"
                onChange={(e) => {
                  setformdata({ ...formdata, email: e.target.value });
                }}
              />
              {valid ? (
              <></>
            ) : (
              <span className="danger">
                {error.email}
              </span>
            )}
              <TextField
                label="Date*"
                color="black"
                focused
                type="date"
                onChange={(e) => {
                  setformdata({ ...formdata, date: e.target.value });
                }}
              />
              {valid ? (
              <></>
            ) : (
              <span className="danger">
                {error.date}
              </span>
            )}
            </Box>

            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label="Password*"
                color="black"
                focused
                type="password"
                onChange={(e) => {
                  setformdata({ ...formdata, pass: e.target.value });
                }}
              />
              {valid ? (
              <></>
            ) : (
              <span className="danger">
                {error.pass}
              </span>
            )}
              <TextField
                label="Confirm Password*"
                color="black"
                focused
                type="password"
                onChange={(e) => {
                  setformdata({ ...formdata, cpass: e.target.value });
                }}
              />
              {valid ? (
              <></>
            ) : (
              <span className="danger">
                {error.cpass}
              </span>
            )}
            </Box>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              className="btncheck"
            />
            <Button variant="contained" onClick={handleSubmit}>
              Create account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
