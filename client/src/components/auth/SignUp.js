import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  saveName = e => {
    this.setState({
      name: e.target.value
    });
  };
  saveEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  savePassword = e => {
    this.setState({
      password: e.target.value
    });
  };
  saveRepeatPassword = e => {
    this.setState({
      confirmPassword: e.target.value
    });
  };
  Signup = e => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.confirmPassword === ""
    ) {
      alert("Fill all the fields");
    }
    if (!this.matchPassword) {
      alert("Passwords not matching");
    }
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://localhost:5000/api/users/signup", user)
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/login");
        }
      })
      .catch(err => console.log(err));
  };
  matchPassword = () => {
    if (this.state.password !== this.state.confirmPassword) {
      return true;
    } else return false;
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <Form
              onSubmit={this.Signup}
              style={signup}
              className=" shadow-lg p-3 mb-5 bg-white rounded"
            >
              <FormGroup>
                {" "}
                <Label style={label}>Company Name</Label>
                <Input
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.saveName}
                />
              </FormGroup>
              <FormGroup>
                {" "}
                <Label style={label}>Email</Label>
                <Input
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.saveEmail}
                />
              </FormGroup>
              <FormGroup>
                {" "}
                <Label style={label}>Password</Label>
                <Input
                  type="text"
                  placeholder="****"
                  value={this.state.password}
                  onChange={this.savePassword}
                />
              </FormGroup>
              <FormGroup>
                {" "}
                <Label style={label}>Confirm Password</Label>
                <Input
                  type="text"
                  placeholder="****"
                  value={this.state.confirmPassword}
                  onChange={this.saveRepeatPassword}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="submit"
                  className="btn btn-dark btn-block"
                  value="Sign Up"
                />
              </FormGroup>
            </Form>
          </Col>

          <Col xs="6" sm="4"></Col>
        </Row>
      </Container>
    );
  }
}

const signup = {
  marginTop: "70px",
  padding: "30px",
  marginBottom: "60px"
};
const label = {
  fontSize: "20px",
  fontFamily: "sans-serif"
};
export default Login;
