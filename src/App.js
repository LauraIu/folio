import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";


function App() {
  return (
    <div className="App">
   <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
    </div>
  );
}

export default App;
