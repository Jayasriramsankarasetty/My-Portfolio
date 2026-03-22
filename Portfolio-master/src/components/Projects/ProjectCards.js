import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "200px", objectFit: "cover", width: "100%" }} />
      <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <Card.Title style={{ color: "#c770f0", fontWeight: "700", fontSize: "1.1em", marginBottom: "10px" }}>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify", fontSize: "0.88em", color: "#c8c8c8", lineHeight: "1.6" }}>
            {props.description}
          </Card.Text>

          {/* Tech Stack Badges */}
          {props.techStack && props.techStack.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
              {props.techStack.map((tech, index) => (
                <span key={index} style={{
                  backgroundColor: "rgba(199, 112, 240, 0.15)",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.8em",
                  color: "white",
                  border: "1px solid #c770f0",
                  fontWeight: "500",
                  letterSpacing: "0.5px"
                }}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>

          {props.isCertificate && props.platform ? (
            <span style={{
              backgroundColor: "rgba(199, 112, 240, 0.15)",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.85em",
              color: "#c770f0",
              border: "1px solid #c770f0",
              fontWeight: "600",
              letterSpacing: "0.5px"
            }}>
              {props.platform}
            </span>
          ) : <span />}

          <div style={{ display: "flex", gap: "10px" }}>
            <Button variant="primary" href={props.ghLink} target="_blank">
              {!props.isCertificate && <BsGithub />}
              {!props.isCertificate && " "}
              {props.isCertificate ? "View Certificate" : props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button variant="primary" href={props.demoLink} target="_blank">
                <CgWebsite /> &nbsp;{"Demo"}
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
