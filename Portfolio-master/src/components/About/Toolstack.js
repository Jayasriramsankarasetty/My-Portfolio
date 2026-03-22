import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiJupyter, SiGooglecolab, SiVisualstudiocode, SiIntellijidea, SiTableau } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter fontSize={"24px"} color="#F37626" />
        <div className="tech-icons-text">Jupyter Notebook</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiGooglecolab fontSize={"24px"} color="#F9AB00" />
        <div className="tech-icons-text">Google Colab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiVisualstudiocode fontSize={"24px"} color="#007ACC" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiIntellijidea fontSize={"24px"} color="#FE2857" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <FaGithub fontSize={"24px"} color="#ffffff" />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiTableau fontSize={"24px"} color="#E97627" />
        <div className="tech-icons-text">Tableau</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
