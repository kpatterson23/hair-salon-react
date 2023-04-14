import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardGroup,
} from "reactstrap";
import HairPhoto from "../app/assets/img/services-hair.jpg";
import NailPhoto from "../app/assets/img/services-nail-replacement.jpg";
import MakeupPhoto from "../app/assets/img/services-makeup.jpg";

const CardServices = () => {
  return (
    // Card Services on homepage
    <CardGroup>
      <Card>
        <CardImg
          src={HairPhoto}
          top
          width="100%"
          alt="Hair Photo"
          className="p-3"
          style={{ height: 380, borderRadius: "50%" }}
        />
        <CardBody>
          <CardTitle tag="h5">Hair Services</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          src={NailPhoto}
          top
          width="100%"
          alt="Nail Photo"
          className="p-3"
          style={{ height: 380, borderRadius: "50%" }}
        />
        <CardBody>
          <CardTitle tag="h5">Nail Services</CardTitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          src={MakeupPhoto}
          top
          width="100%"
          alt="Makeup Photo"
          className="p-3"
          style={{ height: 380, borderRadius: "50%" }}
        />
        <CardBody>
          <CardTitle tag="h5">Makeup Services</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default CardServices;
