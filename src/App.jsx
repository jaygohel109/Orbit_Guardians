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
import Saturn from "./pages/Saturn/Saturn";
import Uranus from "./pages/Uranus/Uranus";
import Neptune from "./pages/Neptune/Neptune";
import KeyVisual from "./components/KeyVisual/KeyVisual";
import Planets from "./pages/Planets/Planets";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import ChatScreen from "./components/Chat/ChatScreen";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePlanet, setActivePlanet] = useState("/");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    const storedUserId = localStorage.getItem("currentUserId");
    if (storedAuthStatus && storedUserId) {
      setIsAuthenticated(JSON.parse(storedAuthStatus));
      setCurrentUserId(storedUserId);
    }
    setLoading(false);
  }, []);

  const handleLogin = (userId) => {
    setIsAuthenticated(true);
    setCurrentUserId(userId);
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("currentUserId", userId);
  };

  const handleSignup = (userId) => {
    setIsAuthenticated(true);
    setCurrentUserId(userId);
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("currentUserId", userId);
    setSnackbar({
      open: true,
      message: "Verification email sent to you. Please verify your email.",
      severity: "info"
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUserId(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUserId");
    navigate("/login");
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      open: false,
      message: "",
      severity: "success"
    });
  };

  if (loading) {
    return <div>Loading...</div>;
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
              onLogout={handleLogout}
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
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Provider>
  );
};

export default App;
