import React from "react";
import "../../styles.css";
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
import { Logo } from "../../img";

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
                  href="/"
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
                <NavLink href="/Professional">Professionels</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Patient">Patient</NavLink>
              </NavItem>           
              <NavItem>
                <NavLink href="/Contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
