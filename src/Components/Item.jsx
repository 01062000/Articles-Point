/** @format */

import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Item() {
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
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Rohit Sharma
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            sharmaSaurabh007@gmail
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            11th OCT 2022
          </Typography>
        </CardContent>
        <CardActions>
          <DeleteForeverIcon
            sx={{
              ":hover": {
                color: "red",
              },
            }}
          />
        </CardActions>
      </Card>
    </>
  );
}

export default Item;
