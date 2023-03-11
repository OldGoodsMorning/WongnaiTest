import ListMenuItem from "./components/ListMenuItem";
import NavImg from "./components/NavImg";

const DUM_COVER_IMG =
  "https://img.wongnai.com/p/1920x0/2021/08/14/f6ae0252eb0d44b79553c0dba6e56cfe.jpg";
const DUM_NAME = "ลืมเคี้ยว";

const testArray = [1, 2, 3];

function App() {
  return (
    <>
      <NavImg coverImg={DUM_COVER_IMG} />
      <div className="global-font" style={{ display: "flex" }}>
        <div style={{ width: "200px" }}></div>
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <h1>{DUM_NAME}</h1>
            </div>
            <div
              style={{
                backgroundColor: "green",
                paddingTop: "15px",
                marginLeft: "10px",
                borderRadius: "10px",
                width: "50px",
              }}
            >
              {" "}
              เปิด
            </div>
          </div>
          
          {testArray.map((x) => {
            console.log(x);
            return (<ListMenuItem />);
          })}
        </div>
      </div>
    </>
  );
}

export default App;
