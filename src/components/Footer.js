import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-5">
      <Container>
        <Row className="pt-4 pb-3">
          <Col>
            <p className="mb-0">Beauté Artistique</p>
            <small className="d-block mb-3 text-muted">&copy; 2023-2025</small>
          </Col>
          <Col>
            <h5 className="pb-1">Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Hair Services</Link>
              </li>
              <li>
                <Link to="/">Nail Services</Link>
              </li>
              <li>
                <Link to="/">Makeup Services</Link>
              </li>
            </ul>
          </Col>
          <Col className="pb-1">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Team</Link>
              </li>
              <li>
                <Link to="/">Policies</Link>
              </li>
              <li>
                <Link to="/">Promotions</Link>
              </li>
            </ul>
          </Col>
          <Col className="pb-1">
            <h5>Socials</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
