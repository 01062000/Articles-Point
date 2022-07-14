/** @format */

import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PreviewIcon from "@mui/icons-material/Preview";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Item({
  isUserItem,
  userName,
  userEmail,
  userNumber,
  articleTitle,
  articleType,
  id,
}) {

  const navigate = useNavigate();

  const deleteUser = () => {

  }

  const viewArticle = () => {
    navigate(`article/${articleType}/${id}`);
  }

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          height: 225,
          cursor: "pointer",
          borderRadius: 2,
          boxShadow: 3,
          ":hover": {
            background: "rgba(0,0,0,0.2)",
          },
        }}>
        <CardContent>
          {isUserItem ? (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom>
              {userName}
            </Typography>
          ) : (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom>
              {articleTitle}
            </Typography>
          )}

          {isUserItem ? (
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {userEmail}
            </Typography>
          ) : (
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {articleType}
            </Typography>
          )}

          {isUserItem ? (
            <Typography variant="body2" sx={{ color: "gray" }}>
              {userNumber}
            </Typography>
          ) : null}
        </CardContent>
        <CardActions>
          {isUserItem ? (
            <Tooltip title="Delete User" onClick={deleteUser}>
              <IconButton>
                <DeleteForeverIcon sx={{ ":hover": { color: "red" } }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="View Article" onClick={viewArticle}>
              <IconButton>
                <PreviewIcon sx={{ ":hover": { color: "#6F2A1C" } }} />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
      </Card>
    </>
  );
}

export default Item;
