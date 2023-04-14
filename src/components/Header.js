import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from "reactstrap";
import BeautyLogo from "../app/assets/img/BA-logo-2.png";

const Header = () => {
  // Controls whether the navbar is open or closed
  const [isOpen, setIsOpen] = React.useState(false);

  // Main navbar
  return (
    <div>
      <Navbar light sticky="top" expand="md">
        <NavbarBrand href="/home" className="ms-5">
          <img
            src={BeautyLogo}
            alt="Beauty Logo"
            style={{ height: 60, width: 60 }}
            className="rounded-circle float-start"
          />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/promotions">Promotions</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
