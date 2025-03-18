import React, { useState } from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.jsx";
import Alert from "./components/Alert/Alert.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.background = "#1b1f22";
      document.body.style.color = "#dee2e6";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light mode Enabled", "success");
    }
  };

  return (
    <div className="app">
      <div className="App-header">
      <Navbar  title="News-Darshan" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      </div>
      

      <Routes>
        <Route exact path='*'element={<Home/>}/>
        <Route exact path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
}

export default App;
