/** @format */

import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Button from "@mui/material/Button";

function Register() {
  const [name, setName] = useState("");
  const handleUsername = (e) => {
    setName((name) => e.target.value);
  };

  const [password, setpassword] = useState("");
  const handlePassword = (e) => {
    setpassword((password) => e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (e) => {
    setEmail((email) => e.target.value);
  };

  const handleSubmit = () =>{

  }

  return (
    <>
      <form className="form_container">
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handleUsername}
          sx={{ width: 350 }}
          variant="standard"
        />

        <TextField
          id="standard-email"
          label="Email"
          value={email}
          onChange={handleEmail}
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
