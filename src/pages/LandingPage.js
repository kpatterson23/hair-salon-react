import { Row, Col, Button } from "reactstrap";

const LandingPage = () => {
  return (
    <div className="landing">
      <Row>
        <Col className="landing-col"></Col>
        <Col>
          <h1 className="display-4 p-5 mt-5">Beauté Artistique Salon</h1>
          <br />
          <p className="display-3 m-3">
            Making you feel as beautiful on the outside as you feel on the
            inside
          </p>
          <Button type="submit" className="btn btn-lg m-5" href={"/home"}>
            Welcome
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
