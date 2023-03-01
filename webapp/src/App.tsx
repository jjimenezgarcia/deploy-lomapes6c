import React from "react";
import "./App.css";
import { OSMap } from "./components/Map/OSMap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <Footer />
    </div>
  );
}

export default App;
