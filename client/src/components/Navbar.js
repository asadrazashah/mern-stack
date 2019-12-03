import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleClick = () => {
    console.log("hello there");
  };

  render() {
    return (
      <div>
        <Navbar className="navbbar shadow rounded" light expand="sm">
          <Container fluid>
            <NavbarBrand
              style={{ color: "#037d50" }}
              href="/"
              className="items"
            >
              Green Jobs
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink style={style} href="/" active>
                    Jobs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={style} href="/addJobs">
                    Post a Job
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={style} href="/ContactUs">
                    ContactUs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={style} href="/Main">
                    Search Jobs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <input
                    className="btn btn-primary"
                    type="button"
                    onClick={this.handleClick}
                    value="Logout"
                  />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const style = {
  color: "#037d50"
};
export default NavBar;
