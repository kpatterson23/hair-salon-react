import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PromotionsPage from './pages/PromotionsPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/promotions' element={<PromotionsPage />} />
        <Route path='/services' element={<ServicesPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
