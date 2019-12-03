import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  FormGroup
} from "reactstrap";
import Job from "./Job";
import axios from "axios";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      jobs: []
    };

    this.setSearch = this.setSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }
  setSearch(e) {
    this.setState({
      search: e.target.value
    });
  }
  submitSearch(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:5000/api/jobs/${this.state.search}`)
      .then(response => {
        this.setState({ search: "", jobs: response.data });
        // console.log(response.data);
      })
      .catch(error => {
        alert(error);
      });
  }
  render() {
    const { jobs } = this.state;
    return (
      <div style={search}>
        <Container>
          <Form onSubmit={this.submitSearch}>
            <Row>
              <Col xs="10">
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Search"
                    name="search"
                    value={this.state.search}
                    onChange={this.setSearch}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Button outline color="info">
                    Search
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Container>

        <Container fluid>
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

const search = {
  marginTop: "20px"
};

export default Main;
