import React from "react";
import "./App.css";
import { OSMap } from "./components/Map/OSMap";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomePage />
      <Footer />
    </div>
  );
}

export default App;
