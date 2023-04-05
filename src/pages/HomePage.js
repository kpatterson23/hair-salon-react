import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import CardServices from "../components/CardServices";
import Founder from "../components/Founder";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <CardServices />
      <Founder />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomePage;
