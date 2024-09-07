import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Register from "./Register";
import Login from "./Login";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div">
          <Link onClick={()=>{
                  navigate("/")
              }} className="Btn">
              Form
            </Link>

            <Link onClick={()=>{
                  navigate("/register")
              }} className="Btn">
              Register
            </Link>

            <Link onClick={()=>{
                  navigate("/login")
              }} className="Btn">
              Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
