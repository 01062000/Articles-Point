/** @format */

import React, { useState } from "react";
import "./writeArticle.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Button } from "@mui/material";

import Tooltip from "@mui/material/Tooltip";

import axios from "axios";

function WriteArticle() {
  const [photo, setPhoto] = useState(null);

  const [articleData, setArticleData] = useState({
    uname: localStorage.getItem("username"),
    title: "",
    type: "",
    content: "",
  });

  const haldleInput = (event) => {
    const { name, value } = event.target;
    setArticleData((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const accessToken = JSON.parse(localStorage.getItem("token"));
  const token = accessToken.jwtToken;

  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer Token` + token;
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  )

  const publishArticle = async () => {
    console.log(token);
    console.log(accessToken);
    //console.log("===========" + localStorage.getItem("token") + "====");
    const response = await axios.post(`http://localhost:8500/article/postarticle`);
    const article = await response.json();
    console.log(article);
  };

  return (
    <>
      <div className="write_article">
        <form className="article_form">
          {photo && (
            <img src={URL.createObjectURL(photo)} alt="article image" />
          )}
          <div className="writeFormGroup">
            <label htmlFor="select_photo">
              <Tooltip title="Add Photo">
                <AddAPhotoIcon
                  sx={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease-in",
                    cursor: "pointer",
                    ":hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Tooltip>
            </label>
            <input
              type="file"
              name="select_photo"
              className="fileInput"
              id="select_photo"
              style={{ display: "none" }}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <input
              type="text"
              className="title"
              placeholder="Title"
              name="title"
              value={articleData.title}
              onChange={haldleInput}
              autoFocus={true}
              style={{ marginLeft: 30 }}
            />
            <input
              type="text"
              className="title"
              placeholder="Type"
              name="type"
              value={articleData.type}
              onChange={haldleInput}
            />
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #0D1219",
                color: "#0D1219",
                ":hover": {
                  background: "#0D1219",
                  color: "white",
                },
              }}
              onClick={publishArticle}>
              Publish
            </Button>
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              className="article_text"
              name="content"
              value={articleData.content}
              onChange={haldleInput}
              rows={2}
              cols={2}></textarea>
          </div>
        </form>
      </div>
    </>
  );
}

export default WriteArticle;
