import React, { Component } from "react";
import { Container, Row, Col, UncontrolledAlert } from "reactstrap";
import Banner from "./Banner";
import Job from "./Job";
import axios from "axios";
import Pagination from "./Pagination";
import JobDescription from "./JobDescription";

export class JobsPosts extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [],
      description: false,
      clicked: "",
      currentPage: 1,
      postsPerPage: 6
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

  handleClick = data => {
    this.setState(prevState => ({
      jobs: prevState.jobs,
      description: true,
      clicked: data
    }));
  };

  showData = () => {
    const job = this.state.jobs.filter(job => job._id === this.state.clicked);
    // console.log(job);
    const {
      _id,
      companyName,
      title,
      experience,
      description,
      location,
      salary
    } = job[0];

    return (
      <JobDescription
        key={_id}
        id={_id}
        companyName={companyName}
        title={title}
        experience={experience}
        description={description}
        location={location}
        salary={salary}
      />
    );
  };

  // Change page
  paginate = pageNumber => {
    this.setState(prevState => ({
      jobs: prevState.jobs,
      description: prevState.description,
      clicked: prevState.clicked,
      currentPage: pageNumber
    }));
  };

  render() {
    const { description } = this.state;
    // const { jobs, description } = this.state;
    // Get current posts
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;

    const currentPosts = this.state.jobs.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return (
      <div className="jobsbody">
        <Container>
          <Row>
            <Col xs="6">
              <UncontrolledAlert>
                Jobs are listed based on recent basis
              </UncontrolledAlert>
              {currentPosts.map(
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
                    id={_id}
                    handleClick={data => this.handleClick(data)}
                    companyName={companyName}
                    title={title}
                    experience={experience}
                    description={description}
                    location={location}
                    salary={salary}
                  />
                )
              )}
              <Pagination
                postsPerPage={this.state.postsPerPage}
                totalPosts={this.state.jobs.length}
                paginate={this.paginate}
              />
            </Col>
            <Col xs="6">{description ? this.showData() : <Banner />}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default JobsPosts;
