import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";
import Jumbotron from "./Jumbotronn";
import axios from "axios";

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.setEmail = this.setEmail.bind(this);
    this.setName = this.setName.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  setName(e) {
    this.setState({
      name: e.target.value
    });
  }
  setEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  setMessage(e) {
    this.setState({
      message: e.target.value
    });
  }
  submitMessage(e) {
    e.preventDefault();
    console.log("i m clicked");
    const message = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    axios
      .post("http://localhost:5000/api/contact", message)
      .then(res => console.log(res.data));

    window.location = "/";
  }
  render() {
    return (
      <div className="contact-form">
        <Jumbotron />
        <Container>
          <Form onSubmit={this.submitMessage}>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={this.setName}
                    value={this.state.name}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label type="text">Email Address</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={this.setEmail}
                    value={this.state.email}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label>Message</Label>
              <Input
                name="message"
                type="text"
                placeholder="Your message here"
                onChange={this.setMessage}
                value={this.state.message}
              />
            </FormGroup>

            <FormGroup>
              <Button color="info">Send Message</Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ContactUs;
