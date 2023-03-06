import Jumbotron from "../components/Jumbotron";
import CardServices from "../components/CardServices";
import Founder from "../components/Founder";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <div>
      <Jumbotron />
      <CardServices />
      <Founder />
      <Gallery />
    </div>
  );
};

export default HomePage;
