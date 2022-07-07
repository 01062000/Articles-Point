/** @format */

import { Grid, Item } from "@mui/material";
import React from "react";
import "./articleDetails.css";
import Filter from "../Components/Filter";

function ArticleDetails() {
  return (
    <>
      <Filter />
      <Grid container spacing={4} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4} className="article_side">
          <h3>Article Title</h3>
          <img src="https://images.pexels.com/photos/10836627/pexels-photo-10836627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
        </Grid>
        <Grid item xs={8} className="article_para">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis a porro natus animi fugiat repellendus laudantium, dolorem eligendi maiores eius.</p>
        </Grid>
      </Grid>
    </>
  );
}

export default ArticleDetails;
