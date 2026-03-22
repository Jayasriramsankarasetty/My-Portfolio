import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiTensorflow, SiPytorch, SiFastapi, SiGooglecloud, SiKubernetes, SiRedis, SiMongodb, SiPostgresql, SiTableau, SiStreamlit } from "react-icons/si";
import { FaJava, FaPython, FaGitAlt, FaDocker } from "react-icons/fa";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava fontSize={"24px"} color="#E76F00" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython fontSize={"24px"} color="#3776AB" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Matplotlib</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch fontSize={"24px"} color="#EE4C2C" />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow fontSize={"24px"} color="#FF6F00" />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau fontSize={"24px"} color="#E97627" />
        <div className="tech-icons-text">Tableau</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"24px"} color="#009688" />
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} color="#336791" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize={"24px"} color="#47A248" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud fontSize={"24px"} color="#4285F4" />
        <div className="tech-icons-text">Google Cloud</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt fontSize={"24px"} color="#F05032" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis fontSize={"24px"} color="#DC382D" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker fontSize={"24px"} color="#2496ED" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes fontSize={"24px"} color="#326CE5" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">Pinecone</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">FAISS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">LangChain</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">LangGraph</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit fontSize={"24px"} color="#FF4B4B" />
        <div className="tech-icons-text">Streamlit</div>
      </Col>
    </Row>
  );
}

export default Techstack;