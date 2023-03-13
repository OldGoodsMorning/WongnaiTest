import HomePage from "./pages";

import { Navigate, Routes, BrowserRouter, Route } from "react-router-dom";
import MenuPage from "./pages/menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomePage />}></Route>
          <Route path={"/menu/:restaurantID/:menuID"} element={<MenuPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
