import React, { Component } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import axios from "axios";

function Job(props) {
  return (
    <div className="cardd">
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

export class Jobs extends Component {
  constructor() {
    super();
    this.state = {
      jobs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/jobs")
      .then(response => {
        this.setState({ jobs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { jobs } = this.state;
    return (
      <div className="jobsbody">
        <Container>
          {jobs.map(
            ({
              _id,
              companyName,
              title,
              experience,
              description,
              location,
              salary
            }) => (
              <Job
                key={_id}
                companyName={companyName}
                title={title}
                experience={experience}
                description={description}
                location={location}
                salary={salary}
              />
            )
          )}
        </Container>
      </div>
    );
  }
}

export default Jobs;
