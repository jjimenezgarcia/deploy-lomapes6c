import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/Pages/WelcomePage/WelcomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/Pages/UserPage/UserPage";
import { SessionProvider } from "@inrupt/solid-ui-react";
import About from "./components/About/About";
import { FriendHandler } from "./components/Solid/Friends/FriendHandler";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "LoMap_es6c";
  }, []);

  return (
    <div className="App">
      <SessionProvider sessionId="logIn">
        <Router>
          <Routes>
            <Route path="/" element={<div>
                  <NavBar />
                  <WelcomePage />
                  <Footer />
                </div>} />
            <Route
              path="/about"
              element={
                <div>
                  <NavBar />
                  <About />
                  <Footer />
                </div>
              }
            />
            <Route path="/user" element={<div> <NavBar /> <UserPage /> </div>} />
            <Route
              path="/friends"
              element={
                <div>
                  <NavBar />
                  <FriendHandler />
                </div>
              }
            />
          </Routes>
        </Router>
      </SessionProvider>
    </div>
  );
}

export default App;
