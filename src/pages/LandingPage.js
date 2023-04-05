import { Row, Col, Button } from "reactstrap";

const LandingPage = () => {
  return (
    <div className="landing">
      <Row>
        <Col className="landing-col"></Col>
        <Col>
          <h1 className="display-2 pt-5 pb-4 mt-5">Beauté Artistique Salon</h1>
          <br />
          <em className="display-4 m-4">
            Making you feel as beautiful on the outside as you feel on the
            inside
          </em>
          <br />
          <Button
            type="submit"
            className="landing-btn btn btn-lg m-5"
            href={"/home"}
          >
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
