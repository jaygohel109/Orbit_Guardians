import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Provider from "./components/Provider/Provider";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Mercury from "./pages/Mercury/Mercury";
import Venus from "./pages/Venus/Venus";
import Earth from "./pages/Earth/Earth";
import Mars from "./pages/Mars/Mars";
import Jupiter from "./pages/Jupiter/Jupiter";
import Saturn from "./pages/Saturn/Saturn";
import Uranus from "./pages/Uranus/Uranus";
import Neptune from "./pages/Neptune/Neptune";
import KeyVisual from "./components/KeyVisual/KeyVisual";
import Planets from "./pages/Planets/Planets";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import ChatScreen from "./components/Chat/ChatScreen";

const App = () => {
  const location = useLocation();
  const [activePlanet, setActivePlanet] = useState("/");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true); // Update authentication state upon successful signup
  };

  return (
    <Provider>
      <Wrapper>
        {isAuthenticated ? (
          <>
            <Navbar
              pathName={location.pathname}
              onHover={setActivePlanet}
              activePlanet={activePlanet}
            />
            <AnimatePresence>
              <Routes location={location} key={location.key}>
                <Route path="/mercury" element={<Mercury />} />
                <Route path="/venus" element={<Venus />} />
                <Route path="/earth" element={<Earth />} />
                <Route path="/mars" element={<Mars />} />
                <Route path="/jupiter" element={<Jupiter />} />
                <Route path="/saturn" element={<Saturn />} />
                <Route path="/uranus" element={<Uranus />} />
                <Route path="/neptune" element={<Neptune />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/chat" element={<ChatScreen />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<KeyVisual activePlanet={activePlanet} />} />
              </Routes>
            </AnimatePresence>
          </>
        ) : (
          <Routes location={location} key={location.key}>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignUP={handleSignup} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Wrapper>
    </Provider>
  );
};

export default App;
