import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

function ServAccordion(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="py-5 text-center">
            <h1>Beauté Artistique Services</h1>
            <p>Discuss special request with your stylist</p>
            <Button type="submit" color="dark" className="btn-lg m-5" href={'/booking'}>
              Book Now
            </Button>
          </Col>
        </Row>

        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Hair services</AccordionHeader>
            <AccordionBody accordionId="1">
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Braids</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Child Twist</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Coloring</h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Crochet</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Cutting</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Extensions</h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Individuals</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Perm</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Press and Curl</h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Retwist</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Shampoo and Blow-dry</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Straightening</h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Individuals</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Perm</h5>
                </Col>
                <Col className="text-center p-2 pb-3"></Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Nail Services</AccordionHeader>
            <AccordionBody accordionId="2">
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Acrylic Full Set</h5>
                  <p>-With Tips</p>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Added Tips</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Basic Manicure</h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Gel Manicure</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Polygel Full Set</h5>
                  <p>-With Tips</p>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Nail Art</h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Spa Gel Manicure</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Spa Manicure</h5>
                </Col>
                <Col className="text-center p-2 pb-3"></Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Makeup Services</AccordionHeader>
            <AccordionBody accordionId="3">
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Brow Tinting</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Brow Waxing</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Glam Makeup</h5>
                </Col>
              </Row>
              <Row>
                <Col className="text-center p-2 pb-3">
                  <h5>Lashes Extensions</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Lashes Tinting</h5>
                </Col>
                <Col className="text-center p-2 pb-3">
                  <h5>Natural Makeup</h5>
                </Col>
              </Row>
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        <Row>
          <Col className="py-5 text-center1">
            <p>
              *Travel fee may be incurred if services are performed outside the
              salon.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServAccordion;
