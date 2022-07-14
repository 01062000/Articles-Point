/** @format */

import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    userName: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user"
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:8500/adduser`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json;charset=UTF-8"}
    });
    const userData = await response.json();
    console.log(userData);
    navigate(`/login`);
  };

  return (
    <>
      <form className="form_container">
        <TextField
          id="standard-basic"
          label="Username"
          name="userName"
          value={data.userName}
          onChange={InputEvent}
          sx={{ width: 350 }}
          variant="standard"
        />

        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          value={data.name}
          onChange={InputEvent}
          sx={{ width: 350 }}
          variant="standard"
        />

        <TextField
          id="standard-email"
          label="Email"
          name="email"
          value={data.email}
          onChange={InputEvent}
          sx={{ width: 350 }}
          variant="standard"
        />

        <TextField
          id="standard-number"
          label="Phone Number"
          name="phone"
          value={data.phone}
          onChange={InputEvent}
          sx={{ width: 350 }}
          variant="standard"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          name="password"
          value={data.password}
          onChange={InputEvent}
          sx={{ width: 350 }}
          variant="standard"
        />

        <Button
          variant="contained"
          endIcon={<HowToRegIcon />}
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
          onClick={handleSubmit}>
          Register
        </Button>
      </form>
    </>
  );
}

export default Register;
