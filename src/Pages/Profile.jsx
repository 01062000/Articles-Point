/** @format */

import React, { useState, useEffect } from "react";

import "../Pages/profile.css";

import Item from "../Components/Item";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

function Profile() {
  const param = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const accessToken = JSON.parse(localStorage.getItem("token"));
  //var bearer = `Bearer ` + accessToken.jwtToken;

  const getUserData = async () => {
    const response = await fetch(
      `http://localhost:8500/user/getuser/${param.username}`,
      {
        method: "POST",
        withCredentials: true,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${accessToken.jwtToken}`,
        },
      }
    );
    const userData = await response.json();
    setUser(userData);
  };

  const [usersInApp, setUsersInApp] = useState([]);

  const getAllUserInApp = async () => {};

  const [articles, setArticles] = useState([]);

  const getUserArticles = async () => {};

  useEffect(() => {
    //getUserData();
    if (localStorage.getItem("isAdmin") === true) getAllUserInApp();
    else getUserArticles();
  }, [param.username]);

  const createUser = () => {
    navigate(`/Register`);
  };

  const publishArticle = () => {
    navigate(`/article/publish`);
  };

  return (
    <>
      <div className="header">
        {localStorage.isAdmin === true ? (
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
        ) : (
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            sx={{
              color: "black",
              background: "white",
              width: 180,
              height: 55,
              marginLeft: 150,
              border: "1px solid black",
              ":hover": {
                color: "white",
                background: "black",
              },
            }}
            onClick={publishArticle}>
            Publish Article
          </Button>
        )}
      </div>
      <div className="prifile_container">
        <div className="side_info">
          <Avatar src="/broken-image.jpg" sx={{ width: 150, height: 150 }} />
          <div className="info">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.number}</p>
          </div>
        </div>
        <div className="dashboard_container">
          {localStorage.isAdmin === true
            ? usersInApp.map((userInApp, index) => {
                return (
                  <Item
                    isUserItem={true}
                    id={index}
                    userName={userInApp.name}
                    userEmail={userInApp.email}
                    userNumber={userInApp.number}
                  />
                );
              })
            : articles.map((article) => {
                return (
                  <Item
                    isUserItem={false}
                    id={article.aid}
                    articleTitle={article.title}
                    articleType={article.type}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}

export default Profile;
