import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Row } from "reactstrap";
import axios from "axios";
import Jumbotronn from "./Jumbotronn";
import Styled from "./Styled";

class AddJobs extends Component {
  constructor() {
    super();
    //state of the form
    this.state = {
      companyName: "",
      title: "",
      experience: 0,
      description: "",
      location: "",
      salary: 0
    };
    //binding functions with class
    this.submitPost = this.submitPost.bind(this);
    this.saveCompany = this.saveCompany.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.saveSalary = this.saveSalary.bind(this);
    this.saveDescription = this.saveDescription.bind(this);
    this.saveLocation = this.saveLocation.bind(this);
    this.saveExperience = this.saveExperience.bind(this);
  }

  //functions assocaiated with inputs
  saveCompany(e) {
    this.setState({
      companyName: e.target.value
    });
  }
  saveTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  saveExperience(e) {
    this.setState({
      experience: e.target.value
    });
  }
  saveDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  saveLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  saveSalary(e) {
    this.setState({
      salary: e.target.value
    });
  }
  submitPost(e) {
    e.preventDefault();
    //console.log("Hello");
    const job = {
      companyName: this.state.companyName,
      title: this.state.title,
      experience: this.state.experience,
      description: this.state.description,
      location: this.state.location,
      salary: this.state.salary
    };
    axios
      .post("http://localhost:5000/api/jobs", job)
      .then(res => console.log(res.data));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <Jumbotronn />
        <Container className="formbody">
          <Form onSubmit={this.submitPost}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="jobTitle">Job Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Mention Job Title"
                    value={this.state.title}
                    onChange={this.saveTitle}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Company </Label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company Name"
                    value={this.state.companyName}
                    onChange={this.saveCompany}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="1234 Main St"
                value={this.state.location}
                onChange={this.saveLocation}
              />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Job Description ..."
                value={this.state.description}
                onChange={this.saveDescription}
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Experience</Label>
                  <Input
                    type="number"
                    name="experience"
                    id="exampleCity"
                    placeholder="1 "
                    value={this.state.experience}
                    onChange={this.saveExperience}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Salary</Label>
                  <Input
                    type="number"
                    name="salary"
                    id="salary"
                    value={this.state.salary}
                    onChange={this.saveSalary}
                  />
                </FormGroup>
              </Col>
            </Row>

            <input type="submit" value="Post Job" className="btn btn-primary" />
          </Form>
        </Container>
        <Styled />
      </div>
    );
  }
}
export default AddJobs;
