/** @format */

import "../Pages/login.css";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink, useNavigate} from "react-router-dom";

import axios from "axios";

function Login() {

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const handleUsername = (e) => {
    setName((name) => e.target.value);
  };

  const [password, setpassword] = useState("");
  const handlePassword = (e) => {
    setpassword((password) => e.target.value);
  };

  const [role, setRole] = useState("");
  const handleRole = (e) => {
    setRole(e.target.value);
  };

  let data = {
    username : name,
    password : password
  }

  const loginFunction = async () => {
    const response = await fetch(`http://localhost:8500/authenticate`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json;charset=UTF-8"}
    });
    const loginData = await response.json();
    console.log(loginData);
    localStorage.setItem("username", name);
    localStorage.setItem("token", JSON.stringify(loginData));
    if(role == "user")
      localStorage.setItem("isAdmin", false);
    else
      localStorage.setItem("isAdmin", true);
  }

  function handleSubmit(e){
    loginFunction();
    setName("");
    setpassword("");
    setRole("");
    if(role == "admin")
      navigate(`/profile/${role}/${name}`);
    else
      navigate(`/profile/${role}/${name}`);
  }

  return (
    <>
      <form className="form_container">
        <TextField
          id="standard-basic"
          label="Username"
          value={name}
          onChange={handleUsername}
          sx={{ width: 350 }}
          variant="standard"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePassword}
          sx={{ width: 350 }}
          variant="standard"
        />

        <FormControl>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={role}
            label="role"
            onChange={handleRole}
            sx={{ width: 350 }}>
            <MenuItem value={"user"}>User</MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          endIcon={<LoginIcon />}
          sx={{
            color: "black",
            background: "white",
            width: 350,
            height: 50,
            borderRadius: 50,
            border: "1px solid black",
            ":hover": {
              color: "white",
              background: "black",
            },
          }}
          onClick={handleSubmit}
          >
          Login
        </Button>

        <p>Don't have an account? <NavLink to="/register" className="sign_up">Register</NavLink> here! </p>
      </form>
    </>
  );
}

export default Login;
