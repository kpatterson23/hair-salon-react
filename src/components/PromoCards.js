import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const PromoCards = () => {
  return (
    <div>
      {/* Promotions Title */}
      <Container className="p-5">
        <Row>
          <Col className="py-5 text-center">
            <h1>Promotions</h1>
            <p>Check out these limited time offers!</p>
          </Col>
        </Row>

        {/* Promotion Cards */}
        <Card className="my-2">
          <CardHeader style={{ backgroundColor: "#f3dcd4" }}>
            Hair Promotion
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">30% off Shampoo and Blow-dry</CardTitle>
            <CardText>
              Take 30% off shampoo and blow-dry service with any cut, color or
              style. Limited time only!
            </CardText>
            <Button type="submit" color="dark" className="btn-lg">
              Book Now
            </Button>
          </CardBody>
          <CardFooter>30 days remaining</CardFooter>
        </Card>
        <Card className="my-2">
          <CardHeader style={{ backgroundColor: "#f3dcd4" }}>
            Nail Promotion
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">$5 Basic Manicure</CardTitle>
            <CardText>
              Basic Manicures only $5 for a limited time only!
            </CardText>
            <Button type="submit" color="dark" className="btn-lg">
              Book Now
            </Button>
          </CardBody>
          <CardFooter>30 days remaining</CardFooter>
        </Card>
        <Card className="my-2">
          <CardHeader style={{ backgroundColor: "#f3dcd4" }}>
            Makeup Promotion
          </CardHeader>
          <CardBody>
            <CardTitle tag="h5">$10 Lash Extensions</CardTitle>
            <CardText>
              Come get your new look with our limited time promotion on lash
              extensions!
            </CardText>
            <Button type="submit" color="dark" className="btn-lg">
              Book Now
            </Button>
          </CardBody>
          <CardFooter>30 days remaining</CardFooter>
        </Card>
      </Container>
    </div>
  );
};

export default PromoCards;
