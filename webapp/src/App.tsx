import React from "react";
import "./App.css";
import { OSMap } from "./components/Map/OSMap";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import MainMenu from "./components/MainMenu/MainMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route
            path="/start"
            element={
              <div>
                <NavBar />
                <WelcomePage />
                <Footer />
              </div>
            }
          />
          <Route path="/about" element={<div>Sobre Nosotros</div>} />
          <Route path="/login" element={<div>Log in</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
