import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import BeautyLogo from "../app/assets/img/BA-logo-2.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Main Navigation Bar
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/" className="ms-5">
        <img src={BeautyLogo} alt="Beauty Logo" />
        <h1 className="mt-1">Beauté Artistique</h1>
      </NavbarBrand>

      {/* Navigation Links */}
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
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
  );
};

export default Header;
