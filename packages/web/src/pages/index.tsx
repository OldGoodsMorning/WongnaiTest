import { Button, Card, Chip, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavImg from "../components/NavImg";
import ListMenuItem from "../components/ListMenuItem";

import axios from "axios";
import { RestaurantModel } from "../models/restaurant_model";
import { ShortMenuModel } from "../models/short_menu_model";

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const restaurantId = ["567051", "227018"];

const selectedRestaurant = 0;

const HomePage = () => {
  const [restaurant, setRestaurant] = useState<RestaurantModel>();
  const [shortMenuItems, setShortMenuItems] = useState<ShortMenuModel[]>([]);
  const [buffer, setBuffer] = useState<ShortMenuModel[]>([]);

  const now = new Date();


  const fetchRestaurant = async () => {
    await axios
      .get(
        `http://localhost:3001/restaurants/${restaurantId[selectedRestaurant]}`
      )
      .then(function (res) {
        // console.log(res.data);
        setRestaurant(res.data);
        fetchShortMenu(res.data);
      });
  };

  const fetchShortMenu = async (data: RestaurantModel) => {
    const menus: string[] = data.menus;

    const resMenus: ShortMenuModel[] = await Promise.all(
      menus?.map(async (item) => {
        const res = await axios.get(
          `http://localhost:3001/restaurants/${data.id}/menus/${item}/short.json`
        );
        // console.log(res.data);
        return res.data;
      }) ?? []
    );
    setShortMenuItems(resMenus);

    // menus.map(async (item) => {
    //   const res = await axios
    //     .get(
    //       `http://localhost:3001/restaurants/${data.id}/menus/${item}/short.json`
    //     )
    //     .then(function (res) {
    //       setShortMenuItems([...shortMenuItems,res.data])
    //     });
    // });
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  

  return (
    <>
      <NavImg coverImg={restaurant?.coverImage} />

      <div style={{ paddingTop: "30px" }} />

      <Grid container spacing={1} columns={8} style={{ paddingLeft: "30px" }}>
        <Grid item xs={1} sx={{ display: { xs: "none", md: "block" } }} />
        <Grid item xs={7}>
          <div style={{ display: "flex" }}>
            <h3 style={{ fontSize: "50px" }}>{restaurant?.name}</h3>
            
            <div >
            {
              //check time
            Number(restaurant?.activeTimePeriod.close.split(':')![0])*60 + Number(restaurant?.activeTimePeriod.close.split(':')![1]) > Number(now.getHours())*60 + now.getMinutes() &&
            Number(restaurant?.activeTimePeriod.open.split(':')![0])*60 + Number(restaurant?.activeTimePeriod.open.split(':')![1]) <= Number(now.getHours())*60 + now.getMinutes() ?
            <Chip label='open' style={{margin:'10px'}}/>:
            <Chip label='close' style={{margin:'10px'}}/>
            }  
            </div>
          </div>

          <div style={{ paddingTop: "30px" }} />
        </Grid>
      </Grid>
      <Card sx={{ padding: "10px" }}>
        <div style={{ overflow: "auto", display: "flex" }}>
          {shortMenuItems.map((item, index) => {
            // console.log(item);
            return <ListMenuItem menuItem={item} restaurantID={restaurantId[selectedRestaurant]} key={index} />;
          })}
        </div>
      </Card>
    </>
  );
};

export default HomePage;
