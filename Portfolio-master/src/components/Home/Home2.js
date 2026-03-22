import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m Sriram, a 3rd year B.Tech Computer Science student, currently
              focused on becoming an AI/ML Engineer. I enjoy building systems
              that solve real-world problems using data and intelligent models.
              <br />
              <br />
              I’m building strong foundations in
              <i>
                <b className="purple">
                  {" "}
                  Data Structures & Algorithms, Machine Learning, and Backend Development{" "}
                </b>
              </i>
              while working with
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, SQL, FastAPI, and Google Cloud (GCP){" "}
                </b>
              </i>.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  AI/ML Applications, NLP Systems, and Scalable APIs{" "}
                </b>
              </i>
              with a focus on real-world impact.
              <br />
              <br />
              Whenever possible, I build and deploy projects using
              <b className="purple"> FastAPI </b>, containerization with{" "}
              <b className="purple"> Docker </b>, and cloud platforms like{" "}
              <i>
                <b className="purple"> Google Cloud Platform (GCP)</b>
              </i>.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
