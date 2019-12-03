import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default function checkAuth(Comp) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        redirect: false
      };
    }
    componentDidMount() {
      fetch("/checkToken")
        .then(res => {
          if (res.status === 200) {
            this.setState({ redirect: true });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ redirect: false });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return (
        <React.Fragment>
          <Comp {...this.props} />
        </React.Fragment>
      );
    }
  };
}
