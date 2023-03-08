import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PromotionsPage from "./pages/PromotionsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/promotions' element={<PromotionsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
