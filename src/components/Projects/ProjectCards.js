import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi"; // Import icon Figma

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Show GitHub button only if ghLink exists */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Show Figma button if figmaLink exists */}
        {props.figmaLink && (
          <Button
            variant="primary"
            href={props.figmaLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FiFigma /> &nbsp;
            {"Figma"}
          </Button>
        )}

        {/* Show Demo button if demoLink exists and the component is not a blog */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
