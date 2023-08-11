import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateMeme from "./pages/CreateMeme";
import MainHeading from "./components/MainHeading";
import "./styles.css"

function App() {

  return (

    <div className="wrapper">
      <MainHeading />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/createMeme" element={<CreateMeme />}></Route>
      </Routes>
    </div>

  )


}




export default App;
