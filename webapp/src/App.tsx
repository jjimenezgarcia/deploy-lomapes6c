import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import MainMenu from "./components/MainMenu/MainMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginPage/LoginPage";
import SignupForm from "./components/SignupPage/SignupPage";
import { OSMap } from "./components/Map/OSMap";
import { SessionProvider } from "@inrupt/solid-ui-react";
import UserLogin from "./components/User/UserLogin";

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
          <Route path="/about" element={<div>Sobre Nosotros</div>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/solidprueba" element={<SessionProvider sessionId="log-in"><UserLogin /></SessionProvider>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
