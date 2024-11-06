import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './page/Home/Home';
import Video from "./page/video/Video"
import { useState } from "react";

function App() {
  const[sidebar,setsidebar]=useState(true);
  return (
    <div className="App">
      <Navbar 
      setsidebar={setsidebar}
      />
      <Routes>
        <Route path="/" element={<Home sidebar ={sidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/> 
      </Routes>
    </div>
  );
}

export default App;
