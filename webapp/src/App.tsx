import React from "react";
import "./App.css";
import { OSMap } from "./components/Map/OSMap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <OSMap />
      <Footer />
    </div>
  );
}

export default App;
