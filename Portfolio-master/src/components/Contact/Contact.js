import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ paddingTop: "50px", paddingBottom: "50px" }}>

          {/* Contact Information & Socials */}
          <Col md={5} className="home-about-social" style={{ textAlign: "left", marginBottom: "30px" }}>
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
              GET IN <span className="purple"> TOUCH </span>
            </h1>

            <p style={{ fontSize: "1.2em", marginBottom: "15px" }}>
              <FaEnvelope className="purple" style={{ marginRight: "10px" }} />
              jayasriramnani9@gmail.com
            </p>
            <p style={{ fontSize: "1.2em", marginBottom: "30px" }}>
              <FaPhoneAlt className="purple" style={{ marginRight: "10px" }} />
              +91 7842224610
            </p>

            <h3 style={{ paddingTop: "20px" }}>FIND ME <span className="purple">ON</span></h3>
            <ul className="home-about-social-links" style={{ textAlign: "left", paddingLeft: 0 }}>
              <li className="social-icons">
                <a
                  href="https://github.com/Jayasriramsankarasetty"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Jayasriram40612"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jayasrirams/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sri_ramm9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Form */}
          <Col md={6} style={{ marginTop: "20px" }}>
            <div className="project-card-view" style={{ padding: "40px", borderRadius: "10px" }}>
              <Form action="https://formspree.io/f/xdawvvko" method="POST">
                <Form.Group className="mb-4" controlId="formBasicName">
                  <Form.Label style={{ color: "white", textAlign: "left", display: "block", fontSize: "1.1em" }}>Your Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="E.g. John Doe"
                    style={{ backgroundColor: "transparent", color: "white", border: "1px solid #aca3b1ff" }}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label style={{ color: "white", textAlign: "left", display: "block", fontSize: "1.1em" }}>Your Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="E.g. user@example.com"
                    style={{ backgroundColor: "transparent", color: "white", border: "1px solid #aca3b1ff" }}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicMessage">
                  <Form.Label style={{ color: "white", textAlign: "left", display: "block", fontSize: "1.1em" }}>Your Message</Form.Label>
                  <Form.Control
                    name="message"
                    as="textarea"
                    rows={5}
                    placeholder="Type your message here..."
                    style={{ backgroundColor: "transparent", color: "white", border: "1px solid #aca3b1ff" }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "100%", fontWeight: "bold", padding: "10px" }}
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
