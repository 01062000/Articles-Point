/** @format */

import "../Pages/login.css";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from "react-router-dom";

function Login() {
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

  const [userData, setUserData] = useState([{}]);

  const userFunction = async () => {
    const userList = await fetch(``);
    const userListData = await userList.json();
    setUserData((data) => userListData);
  }

  function handleSubmit(e){
    userFunction();
    console.log(userData);
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
