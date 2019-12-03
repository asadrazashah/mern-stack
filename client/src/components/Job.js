import React from "react";
import {
  Container,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function Job(props) {
  return (
    <div
      className="cardd"
      onClick={() => {
        props.handleClick(props.id);
      }}
    >
      <Container>
        <Card>
          <CardHeader style={{ color: "#037d50" }}>
            {props.title} <span> Experience Required:</span> {props.experience}{" "}
            Year
          </CardHeader>
          <CardBody>
            <CardTitle style={companyName}>{props.companyName}</CardTitle>
            <CardSubtitle>Salary: {props.salary}</CardSubtitle>
            <CardText>{props.description}</CardText>
            <p>
              <span style={highlight}>Location :</span> {props.location}
            </p>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}

const highlight = {
  fontWeight: "bold"
};

const companyName = {
  fontSize: "1.5em"
};
