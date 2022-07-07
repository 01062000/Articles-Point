/** @format */

import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "@mui/material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";


function Article() {
  let navigate = useNavigate();
  function hoverEvent() {
    navigate(`/article/gym/001`);
  }

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="article_card"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, translateY: -2 }}
          layout>
          <Card
            sx={{
              maxWidth: 350,
              height: 450,
              cursor: "pointer",
              borderRadius: 4,
              boxShadow: 3,
              ":hover": {
                background: "rgba(0,0,0,0.2)",
              },
              
            }}
            onClick={hoverEvent}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
              className="header"
            />
            <CardMedia
              component="img"
              height="194"
              image="https://images.pexels.com/photos/10836627/pexels-photo-10836627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" className="content" sx={{color: "black"}}>
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Article;
