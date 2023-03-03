import { Button } from "reactstrap";

const styling = {
  fontsize: "70px",
};

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <p className="lead text-white">Welcome to</p>
      <h1 className="display-4 text-white mb-5" style={{ styling }}>
        Beauté Artistique Salon
      </h1>
      <Button type="submit" color="dark" className="btn-lg m-5">
        Book Now
      </Button>
    </div>
  );
};

export default Jumbotron;
