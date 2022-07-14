/** @format */

import { Grid, Item } from "@mui/material";
import React from "react";
import "./articleDetails.css";
import Filter from "../Components/Filter";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ArticleDetails() {
  return (
    <>
      <Filter />
      <div className="edit">
        <Tooltip title="Delete Article">
          <IconButton sx={{transform: "scale(1.5)", ":hover": { background: "rgba(115, 64, 64, 0.2)" }}}>
            <DeleteForeverIcon
              sx={{":hover": { color: "red" } }}
            />
          </IconButton>
        </Tooltip>
      </div>
      <Grid
        container
        spacing={4}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4} className="article_side">
          <h3>Article Title</h3>
          <img
            src="https://images.pexels.com/photos/10836627/pexels-photo-10836627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""></img>
        </Grid>
        <Grid item xs={8} className="article_para">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis a porro natus animi fugiat repellendus laudantium,
            dolorem eligendi maiores eius.
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default ArticleDetails;
