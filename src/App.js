import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateMeme from "./pages/CreateMeme";
import "./styles.css"

function App() {

  return (

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/createMeme" element={<CreateMeme/>}></Route>
      </Routes>

  )


}




export default App;
