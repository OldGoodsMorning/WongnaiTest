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
import { useNavigate } from "react-router-dom";


interface listMenuItemProp {
  menuItem : ShortMenuModel,
  restaurantID : string
}

export default function ListMenuItem(props:listMenuItemProp) {

  const navigate = useNavigate();

  const menuClick = () => {
    // console.log(`${props.menuItem.name} click`);
    navigate(`/menu/${props.restaurantID}/${props.menuItem.name}`);
  };

  return (
    <>
      <div style={{ padding: "10px", maxWidth: "245px", position: "relative" }}>
        <CardActionArea onClick={menuClick}>
          <img
            height="245"
            width="245"
            src={props.menuItem.thumbnailImage}
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <h2>{props.menuItem.name}</h2>
            {/* <h4>{DUM_DES}</h4> */}
            <h4>{props.menuItem.fullPrice} บาท</h4>
          </CardContent>
        </CardActionArea>

        {props.menuItem.totalInStock === 0 ? (
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

        {props.menuItem.discountedPercent > 0 || props.menuItem.name.includes('Promotion') ? (
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
