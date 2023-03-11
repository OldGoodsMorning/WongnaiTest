import { Button, Card, IconButton } from "@mui/material";
import ListMenuItem from "./components/ListMenuItem";
import NavImg from "./components/NavImg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const DUM_COVER_IMG =
  "https://img.wongnai.com/p/1920x0/2021/08/14/f6ae0252eb0d44b79553c0dba6e56cfe.jpg";
const DUM_NAME = "ลืมเคี้ยว";

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <NavImg coverImg={DUM_COVER_IMG} />

      <div style={{ paddingTop: "30px" }} />

      <Grid container spacing={1} columns={8} style={{ paddingLeft: "30px" }}>
        <Grid item xs={1} sx={{ display: { xs: "none", md: "block" } }} />
        <Grid item xs={7}>
          <div style={{ display: "flex" }}>
            <h1 style={{ fontSize: "50px" }}>{DUM_NAME}</h1>
            <Button
              variant="contained"
              disabled
              style={{
                color: "white",
                marginLeft: "10px",
                backgroundColor: "green",
                borderRadius: "15px",
              }}
            >
              {" "}
              เปิด
            </Button>
          </div>

          <div style={{ paddingTop: "30px" }} />
        </Grid>
      </Grid>
      <Card sx={{ padding:'10px'}}>
        <div style={{ overflow: "auto", display: "flex" }}>
          {testArray.map((x ,index) => {
            // console.log(x);
            return <ListMenuItem key={index}/>;
          })}
        </div>
      </Card>
    </>
  );
}

export default App;
