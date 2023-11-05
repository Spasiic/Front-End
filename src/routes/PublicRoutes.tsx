import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/index";
import LoginPage from "../pages/LoginPage/index";
import RegisterPage from "../pages/RegisterPage/index";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
