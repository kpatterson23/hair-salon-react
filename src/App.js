import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PromotionsPage from "./pages/PromotionsPage";
import Policies from "./pages/Policies";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
