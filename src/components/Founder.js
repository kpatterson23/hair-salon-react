import { Container, Row, Col } from "reactstrap";
import FounderImg from "../app/assets/img/founder-image.jpg";

const Founder = () => {
  // Founder Section with img and text
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col className="text-center">
          <h3 className="mt-10">Our Founder</h3>
          <img
            id="founder"
            className="img-thumbnail"
            alt="Founder"
            src={FounderImg}
          />
          <h2>Alexia P.</h2>
          <p>
            I have always had a passion for beauty. I loved how beauty could
            change someone's perception of themselves into a positive one. Being
            able to bring out a person's beauty to make them feel beautiful and
            look amazing is what is strived for here at Beauté Artistique Salon.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Founder;
