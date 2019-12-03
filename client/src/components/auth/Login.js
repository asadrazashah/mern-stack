import React, { Component } from "react";
import { Container, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
// import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/checkToken")
  //     .then(res => {
  //       if (res.status === 200) {
  //         this.props.history.push("/");
  //       }
  //     })
  //     .catch();
  // }
  // componentDidMount(){
  //   if(this.state.isLoggedIn){
  //     this.props.history.push("/");
  //   }
  // }
  saveInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };
  submitLogin = e => {
    e.preventDefault();
    const body = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://localhost:5000/api/users/signin", body)
      .then(res => {
        if (res.status === 200) {
          this.props.history.push("/JobPosts");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        alert("Error logging in please try again");
      });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <Form
              onSubmit={this.submitLogin}
              style={login}
              className=" shadow-lg p-3 mb-5 bg-white rounded"
            >
              <FormGroup>
                {" "}
                <Label style={label}>Email</Label>
                <Input
                  name="email"
                  type="text"
                  placeholder="Name"
                  value={this.state.email}
                  onChange={this.saveInput}
                />
              </FormGroup>
              <FormGroup>
                {" "}
                <Label style={label}>Password</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="****"
                  value={this.state.password}
                  onChange={this.saveInput}
                />
              </FormGroup>
              <FormGroup>
                <input
                  type="submit"
                  className="btn btn-dark btn-block"
                  value="Login"
                />
              </FormGroup>
              <a
                className="btn btn-light btn-block"
                href="/signup"
                role="button"
              >
                Register
              </a>
            </Form>
          </Col>
          <Col xs="6" sm="4"></Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

const login = {
  marginTop: "100px",
  padding: "30px"
};
const label = {
  fontSize: "20px",
  fontFamily: "sans-serif"
};
