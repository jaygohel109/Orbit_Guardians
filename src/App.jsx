import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
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
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import ChatScreen from "./components/Chat/ChatScreen";
import { supabase } from './supabaseClient';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [activePlanet, setActivePlanet] = useState("/");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    // Check localStorage for authentication status on component mount
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    const storedUserId = localStorage.getItem('currentUserId');
    if (storedAuthStatus && storedUserId) {
      setIsAuthenticated(JSON.parse(storedAuthStatus));
      setCurrentUserId(storedUserId);
    }
    setLoading(false); // Set loading to false after checking authentication status
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  const handleLogin = (userId) => {
    setIsAuthenticated(true);
    setCurrentUserId(userId);
    localStorage.setItem('isAuthenticated', true); // Store authentication status in localStorage
    localStorage.setItem('currentUserId', userId); // Store current user ID in localStorage
  };

  const handleSignup = (userId) => {
    setIsAuthenticated(true);
    setCurrentUserId(userId);
    localStorage.setItem('isAuthenticated', true); // Store authentication status in localStorage
    localStorage.setItem('currentUserId', userId); // Store current user ID in localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUserId(null);
    localStorage.removeItem('isAuthenticated'); // Clear authentication status in localStorage
    localStorage.removeItem('currentUserId'); // Clear current user ID in localStorage
    navigate('/login'); // Redirect to login page
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking authentication status
  }

  return (
    <Provider>
      <Wrapper>
        {isAuthenticated ? (
          <>
            <Navbar
              pathName={location.pathname}
              onHover={setActivePlanet}
              activePlanet={activePlanet}
              onLogout={handleLogout} // Pass handleLogout to Navbar
            />
            <AnimatePresence>
              <Routes location={location} key={location.key}>
              <Route path="/" element={<KeyVisual activePlanet={activePlanet} />} />
                <Route path="/" element={<Navigate to="/planets" />} />
                <Route path="/mercury" element={<Mercury />} />
                <Route path="/venus" element={<Venus />} />
                <Route path="/earth" element={<Earth />} />
                <Route path="/mars" element={<Mars />} />
                <Route path="/jupiter" element={<ChatScreen currentUserId={currentUserId} />} />
                <Route path="/saturn" element={<Saturn />} />
                <Route path="/uranus" element={<Uranus />} />
                <Route path="/neptune" element={<Neptune />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/chat" element={<ChatScreen currentUserId={currentUserId} />} />
                <Route path="/chat" element={<ChatScreen />} />
              </Routes>
            </AnimatePresence>
          </>
        ) : (
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/signup" element={<Signup onSignUp={handleSignup} />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </AnimatePresence>
        )}
      </Wrapper>
    </Provider>
  );
};

export default App;
