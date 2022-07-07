/** @format */

import React from "react";

import "../Pages/profile.css";

import Item from "../Components/Item";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";


function Profile() {
  const createUser = () => {};

  return (
    <>
      <div className="header">
        <Button
          variant="contained"
          endIcon={<AddCircleIcon />}
          sx={{
            color: "black",
            background: "white",
            width: 150,
            height: 50,
            marginLeft: 150,
            border: "1px solid black",
            ":hover": {
              color: "white",
              background: "black",
            },
          }}
          onClick={createUser}>
          Add User
        </Button>
      </div>
      <div className="prifile_container">
        <div className="side_info">
          <Avatar src="/broken-image.jpg" sx={{ width: 150, height: 150 }} />
          <div className="info">
          <p>Rohit Sharma</p>
          <p>sharmaSaurabh007@gmail.com</p>
          <p>18th OCT 2022</p>
          </div>
        </div>
        <div className="dashboard_container">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}

export default Profile;
