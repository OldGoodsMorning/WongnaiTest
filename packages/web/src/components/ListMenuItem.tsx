import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ShortMenuModel } from "../models/short_menu_model";



const hot = true;

export default function ListMenuItem(props:ShortMenuModel) {


  const menuClick = () => {
    console.log(`${props.name} click`);
    //toggle
    // console.log(props);
  };

  return (
    <>
      <div style={{ padding: "10px", maxWidth: "245px", position: "relative" }}>
        <CardActionArea onClick={menuClick}>
          <img
            height="245"
            width="245"
            src={props.thumbnailImage}
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <h2>{props.name}</h2>
            {/* <h4>{DUM_DES}</h4> */}
            <h4>{props.fullPrice} บาท</h4>
          </CardContent>
        </CardActionArea>

        {props.totalInStock === 0 ? (
          <img
            src="https://www.freeiconspng.com/thumbs/stop-icon/stop-icon-21.png"
            width="50"
            height="50"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
        ) : null}

        {props.discountedPercent > 0 || props.name.includes('Promotion') ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/3655/3655418.png"
            width="50"
            height="50"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
        ) : null}
      </div>
    </>
  );
}
