import React from "react";
import { Container, Nav, NavLink } from "reactstrap";

export default function Footer() {
  return (
    <Container fluid>
      {" "}
      <div className="footer shadow ">
        <Nav>
          <NavLink href="/AddJobs">Employers/Post Job</NavLink>
          <NavLink href="/AboutUs">About Us</NavLink>
          <NavLink href="/ContactUs">Contact Us</NavLink>
        </Nav>
      </div>
    </Container>
  );
}
