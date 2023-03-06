import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import BeautyLogo from "../app/assets/img/BA-logo-2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    // Main Navigation Bar
    <div>
      <Navbar light sticky="top" expand="md">
        <NavbarBrand href="/" className="ms-5">
          <img
            src={BeautyLogo}
            alt="Beauty Logo"
            style={{ height: 60, width: 60 }}
            className="rounded-circle float-start"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        {/* Navigation Links */}
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/">
                About
              </NavLink>
              <NavLink className="nav-link" to="/">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/">
                Promotions
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;