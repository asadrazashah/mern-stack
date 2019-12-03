import React from "react";
import { Container, Col, Row } from "reactstrap";

export default function Styled() {
  return (
    <div>
      <Container className="styled" fluid>
        <Row>
          <Col xs="6" sm="4">
            <h4>The right fit for your jobs</h4>
            <p>
              {" "}
              25 crore people visit Indeed every month, giving you access to the
              most talent in every field.
            </p>
          </Col>
          <Col xs="6" sm="4">
            <h4>On desktop and mobile</h4>
            <p>
              Over 70% of job searches are mobile. Post jobs on Indeed to accept
              applications from any mobile device.
            </p>
          </Col>
          <Col sm="4">
            {" "}
            <h4>More quality hires</h4>
            <p>
              Indeed is the top external source of hire for thousands of
              companies.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
