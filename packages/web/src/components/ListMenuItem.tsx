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

const DUM_NAME = "ราเม็ง";

const DUM_DES = `เมนูเส้นของญี่ปุ่น ความหมายโดยรวมจะครอบคลุมทั้งราเมง อุด้ง และโซบะ แต่เส้นราเมงคือเส้นกลมสีเหลือง คล้ายบะหมี่เหลืองของไทย ทำจากแป้งสาลี มีความเหนียวนุ่ม นิยมทานแบบน้ำร้อนๆ
บางคนอาจสงสัยว่า ราเมง หรือ ราเมน กันแน่ แต่ละร้านสะกดไม่เหมือนกันเลย ความจริงคือจะอ่านแบบไหนก็ได้ เพราะในภาษาญี่ปุ่น เสียงตัวสะกด ん จะอยู่ระหว่างเสียง ง กับ น ของไทย จึงทับศัพท์เป็นภาษาไทยได้ทั้ง 2 แบบ
`;
const DUM_IMG =
  "https://img.freepik.com/free-vector/hand-drawn-flat-design-japan-food-illustration_23-2149281758.jpg";

const hot = true;
const out = !true;

// const [menuCardStatus,setMenuCardStatus] = useState<boolean>(false);

const menuClick = () => {
  console.log("menu click");
  //toggle
  // setMenuCardStatus(!menuCardStatus)
};

  

export default function ListMenuItem() {
  return (
    <>
    
      <div style={{ padding: "10px", width: "500px", position: "relative" }}>
        <CardActionArea onClick={menuClick}>
          <img
            height="245"
            width="245"
            src={DUM_IMG}
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <h1>{DUM_NAME}</h1>
            <h4>{DUM_DES}</h4>
          </CardContent>
        </CardActionArea>
        <div></div>

        {out ? (
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

        {hot ? (
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
