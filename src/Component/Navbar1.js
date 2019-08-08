import React from "react";
import styled from "styled-components";
import "../styles.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
//import icon header
import { Logo } from "../img";

//Navigation Class

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <Logo width="90px" height="60px" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  id="Hom"
                  href="/components/"
                  active="true"
                  style={{
                    color: "#4fad36",
                    borderBottom: "2px solid red"
                  }}
                >
                  Acceuil
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Professionels</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Patients</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Nos Services
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Prendere un RDV</DropdownItem>
                  <DropdownItem>Discuter en Ligne</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Service3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
