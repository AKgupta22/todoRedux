import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Message from "./Component/Message";
import SingleMessage from "./Component/SingleMessage";
import Navbar from "./Component/Navbar";
import Login from "./Component/Login";

function App() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("login")) 
    setIsShow(true);
  }, []);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/message" element={isShow ? <Message /> : <Home />} />
        <Route
          path="/message/:q"
          element={isShow ? <SingleMessage /> : <Home />}
        />
        <Route
          path="/login"
          element={isShow === false ? <Login /> : <Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
