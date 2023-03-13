import { Button, Chip, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FullMenuModel } from "../models/full_menu_model";

const MenuPage = () => {
  const { restaurantID, menuID } = useParams();
  const [fullMenu, setFullMenu] = useState<FullMenuModel>();

  const navigate = useNavigate();
  const now = new Date();

  useEffect(() => {
    fetchFullMenu();
  }, []);

  const fetchFullMenu = async () => {
    await axios
      .get(
        `http://localhost:3001/restaurants/${restaurantID}/menus/${menuID}/full.json`
      )
      .then((res) => {
        // console.log(res.data);
        setFullMenu(res.data);
      });
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid maxWidth="500px">
          <div style={{ paddingTop: "40px" }} />
          <div style={{ display: "flex" }}>
            <Button onClick={() => navigate("/")}>
              <h1> {"<"} </h1>
            </Button>
            <h1 style={{ paddingTop: "8px" }}>Menu Page</h1>
            <div style={{ paddingLeft: "40px" }} />
          </div>
          <div style={{ paddingTop: "20px" }} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={fullMenu?.largeImage}
              style={{
                objectFit: "cover",
                maxHeight: "300px",
                maxWidth: "500px",
                minHeight: "100px",
                minWidth: "180px",
              }}
            />
          </div>

          <div style={{ paddingTop: "40px", paddingLeft: "40px" }}>
            <h1>{fullMenu?.name}</h1>

            <div style={{ display: "flex" }}>
              <h3>ราคา : {fullMenu?.fullPrice} บาท</h3>

              
              { 
                //check discount
                Number(fullMenu?.discountPercent) > 0 &&
                Number(fullMenu?.discountedTimePeriod?.end.split(":")![0]) * 60 +Number(fullMenu?.discountedTimePeriod?.end.split(":")![1]) > Number(now.getHours()) * 60 + now.getMinutes() &&
                Number(fullMenu?.discountedTimePeriod?.begin.split(":")![0]) *60 + Number(fullMenu?.discountedTimePeriod?.begin.split(":")![1]) <=Number(now.getHours()) * 60 + now.getMinutes() ? (
                <h3 style={{ color: "red", marginLeft: "10px" }}>
                  ลด {fullMenu?.discountPercent}%
                </h3>
              ) : null}
            </div>

            <div style={{ paddingTop: "20px" }} />
            {fullMenu?.options[0] != null ? (
              <p>
                <u>เพิ่มเติม</u>
              </p>
            ) : null}

            {fullMenu?.options.map((option, index) => {
              //   console.log(option);
              return (
                <div key={index}>
                  <div style={{ padding: "10px" }} />
                  <h3>{option.label}</h3>
                  <Grid style={{ overflow: "auto", display: "flex" }}>
                    {option.choices.map((choice, index) => {
                      //   console.log(choice);
                      return (
                        <div key={index}>
                          <Chip
                            label={choice.label}
                            style={{
                              padding: "10px",
                              marginTop: "5px",
                              marginRight: "5px",
                            }}
                          />
                        </div>
                      );
                    })}
                  </Grid>
                </div>
              );
            })}

            <div style={{ paddingTop: "20px" }} />
            <Button variant="contained" fullWidth disabled>
              <h3>สั่ง</h3>
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default MenuPage;
