import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.png";
import DeepLearningwithTensorflow from "../../Assets/Projects/DeepLearningwithTensorflow.png";
import PythonforDSandML from "../../Assets/Projects/PythonforDSandML.png";
import MLTraining from "../../Assets/Projects/ML-Training.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I’ve built focused on AI/ML and real-world applications.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 - RAG */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="📚 Personal Knowledge Assistant (RAG) [Ongoing]"
              description="Currently building a Retrieval-Augmented Generation system that allows users to upload documents and query them intelligently. Uses embeddings, vector databases, and LLMs to generate contextual answers from user data."
              techStack={["Python", "LLMs", "LangChain", "Vector DB"]}
              ghLink="https://github.com/YOUR_USERNAME/rag-knowledge-assistant"
            // demoLink can be added later
            />
          </Col>

          {/* Project 2 - Legal Document Analyzer */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="⚖️ Legal Document Analyzer"
              description="Built an NLP pipeline to classify legal clauses into 40+ categories and extract key entities like dates, organizations, and amounts using spaCy. Included EDA visualizations, TF-IDF insights, and model comparison."
              techStack={["Python", "NLP", "spaCy", "Pandas"]}
              ghLink="https://github.com/Jayasriramsankarasetty/LegalDocumentAnalyser"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          {/* Project 3 - EDA Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="📊 Exploratory Data Analysis Project"
              description="Performed in-depth exploratory data analysis on real-world datasets using Python, Pandas, and Matplotlib. Identified trends, handled missing data, and generated actionable insights through visualizations."
              techStack={["Python", "Pandas", "Matplotlib", "Seaborn"]}
              ghLink="https://github.com/Jayasriramsankarasetty/EDA-Project"
              demoLink="https://jayasriramsankarasetty-eda-project-dashboardapp-rfefj8.streamlit.app/"
            />
          </Col>

        </Row>

        <h1 className="project-heading" style={{ paddingTop: "50px" }}>
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the professional certifications I have earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DeepLearningwithTensorflow}
              isBlog={false}
              isCertificate={true}
              platform="Udemy"
              title="Deep Learning with Tensorflow Certification"
              description="Learned how to build and train deep learning models using TensorFlow, including neural networks, convolutional neural networks, and recurrent neural networks."
              ghLink="https://www.udemy.com/certificate/UC-815d80ed-eda1-434b-93a0-37982aced166/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PythonforDSandML}
              isBlog={false}
              isCertificate={true}
              platform="Udemy"
              title="Python for DS and ML Certification"
              description="Learned Python programming for data science and machine learning, including data manipulation, analysis, and machine learning algorithms."
              ghLink="https://www.udemy.com/certificate/UC-234c35af-639d-4744-93b6-177b9b7d23f6/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MLTraining}
              isBlog={false}
              isCertificate={true}
              platform="CPE"
              title="ML Training Certification"
              description="Learned machine learning algorithms, including supervised learning, unsupervised learning, and reinforcement learning."
              ghLink="https://drive.google.com/file/d/1mdt2-LqKh0xIA5t3BCazJkk79yatr3SD/view?pli=1"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
