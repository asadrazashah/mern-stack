import React from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

export default function JobDescription(props) {
  return (
    <div className="job-description sticky-top">
      <Card>
        <CardHeader>
          {props.title} <span> Experience Required:</span> {props.experience}{" "}
          Year
        </CardHeader>
        <CardBody>
          <CardTitle>{props.companyName}</CardTitle>
          <CardSubtitle>Salary: {props.salary}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <p>{props.location}</p>
        </CardBody>
      </Card>
    </div>
  );
}
