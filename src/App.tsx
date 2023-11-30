import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const userContext = useContext(UserContext);
  const auth = userContext?.auth || false;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={auth ? <Navigate to="/main" /> : <LandingPage/>} />
          <Route path="/login" element={auth ? <Navigate to="/main" /> : <LoginPage />} />
          <Route path="/register" element={auth ? <Navigate to="/main" /> : <RegisterPage />} />
          <Route path="/main" element={auth ? <MainPage /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
