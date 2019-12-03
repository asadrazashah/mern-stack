import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import AddJobs from "./components/AddJobs";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Main from "./components/Main";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import withAuth from "./components/auth/withAuth";
import checkAuth from "./components/auth/checkAuth";
import JobPosts from "./components/JobPosts";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login" component={checkAuth(Login)} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/" component={JobPosts} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/signup" component={checkAuth(SignUp)} />
          <Route exact path="/addJobs" component={withAuth(AddJobs)} />

          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
