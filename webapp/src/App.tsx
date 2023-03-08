import React from "react";
import "./App.css";
import { OSMap } from "./components/Map/OSMap";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  return <div className="App">{true && <MainMenu />}</div>;
}

export default App;
