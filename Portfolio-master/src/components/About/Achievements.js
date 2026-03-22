import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Achievements() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={6} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <div style={{ textAlign: "left", padding: "10px" }}>
              <span style={{ fontSize: "1.2em" }}>🔥 <strong className="purple">50-Day Streak on LeetCode</strong> (April 2026)</span>
              <br />
              <br />
              <span style={{ fontSize: "0.9em", color: "#b3b3b3" }}>Maintained a 50-day daily problem-solving streak on LeetCode, showcasing consistency and strong discipline in Data Structures and Algorithms.</span>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <div style={{ textAlign: "left", padding: "10px" }}>
              <span style={{ fontSize: "1.2em" }}>💡 <strong className="purple">200+ LeetCode Problems Solved</strong> (April 2026)</span>
              <br />
              <br />
              <span style={{ fontSize: "0.9em", color: "#b3b3b3" }}>Solved over 200 coding problems on LeetCode, strengthening problem-solving ability and algorithmic thinking across multiple topics.</span>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <div style={{ textAlign: "left", padding: "10px" }}>
              <span style={{ fontSize: "1.2em" }}>🏅 <strong className="purple">5★ Gold Badge in Java</strong> – HackerRank (2025)</span>
              <br />
              <br />
              <span style={{ fontSize: "0.9em", color: "#b3b3b3" }}>Achieved a 5-star Gold badge in Java on HackerRank, demonstrating strong proficiency in core programming concepts and problem-solving.</span>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} className="project-card">
        <Card className="project-card-view">
          <Card.Body>
            <div style={{ textAlign: "left", padding: "10px" }}>
              <span style={{ fontSize: "1.2em" }}>🏅 <strong className="purple">5★ Gold Badge in SQL</strong> – HackerRank (2025)</span>
              <br />
              <br />
              <span style={{ fontSize: "0.9em", color: "#b3b3b3" }}>Earned a 5-star Gold badge in SQL on HackerRank, showcasing expertise in database querying, joins, and data manipulation.</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Achievements;
