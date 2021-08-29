import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { useHistory } from "react-router-dom";
import "../../css/navBar.css";

const NavBar = ({ showButtons }) => {
  const history = useHistory();
  const handleClick = (event) => {
    if (event.target.id === "back") {
      history.goBack();
    } else {
      history.push("/");
    }
  };

  return (
    <div>
      <Navbar
        color="primary"
        dark
        className={!showButtons ? "justify-content-center" : ""}
      >
        <Nav className="mr-auto nav-button" navbar className="ps-3">
          <NavItem>
            {showButtons && (
              <NavLink id="back" onClick={handleClick}>
                Back
              </NavLink>
            )}
          </NavItem>
        </Nav>
        <NavbarBrand>Bowling Arena</NavbarBrand>
        <Nav className="mr-auto nav-button" navbar className="pe-3">
          <NavItem>
            {showButtons && (
              <NavLink id="home" onClick={handleClick}>
                Home
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
