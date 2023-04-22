import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/Pages/WelcomePage/WelcomePage";
import MainMenu from "./components/Pages/MainMenu/MainMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserPage from "./components/Pages/UserPage/UserPage";
import { OSMap } from "./components/Map/OSMap";
import { SessionProvider } from "@inrupt/solid-ui-react";
import RequestFriendship from "./components/Solid/Friends/RequestFriendship";
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
      <SessionProvider sessionId="logIn">
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
            <Route
              path="/start/map"
              element={
                <div>
                  <NavBar />
                  <OSMap />
                  <Footer />
                </div>
              }
            />
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
            <Route path="/user" element={<UserPage />} />
            <Route path="/friends" element={<RequestFriendship />} />
          </Routes>
        </Router>
      </SessionProvider>
    </div>
  );
}

export default App;
