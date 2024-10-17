import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import braineredu from "../../Assets/Projects/braineredu.jpg";
import alarm from "../../Assets/Projects/alarm.jpg";
import kalkulator from "../../Assets/Projects/kalkulator-bmi.jpg"
import crudsederhana from "../../Assets/Projects/crudjs.jpg"
// import guidejakarta from "../../Assets/Projects/guidejakarta.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={braineredu}
              isBlog={false}
              title="Brainer Education"
              description="Brainer Education is an online learning platform offering both free and paid courses through videos and exercises. Users can easily learn and explore their interests without missing out on opportunities."
              ghLink="https://github.com/FE-14-Skilvul"
              demoLink="https://finalproject-braineredu-fe14.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alarm}
              isBlog={false}
              title="Alarm Panic"
              description="Alarm Panic is a simple web app displaying Waktu Indonesia Barat (WIB) with a customizable alarm feature. The modern interface and vibrant design make time management easy and visually appealing."
              ghLink="https://github.com/TajuddinAlAnshori/alarm-panic"
              demoLink="https://alarm-panic.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalkulator}
              isBlog={false}
              title="Kalkulator BMI"
              description="The BMI Calculator is a simple application that allows users to calculate their Body Mass Index (BMI) based on their height and weight. With a modern interface and clean design, the app makes it easy for users to quickly assess their health status."
              ghLink="https://github.com/TajuddinAlAnshori/Kalkulator-BMI"
              demoLink="https://kalkulator-bmi-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudsederhana}
              isBlog={false}
              title="CRUD List Shopping"
              description=" List Shopping is a web application designed to help users manage their shopping lists. It features full CRUD (Create, Read, Update, Delete) functionality, allowing users to efficiently organize and edit their items. The user-friendly interface and intuitive design make it a practical tool for everyday use."
              ghLink="https://github.com/TajuddinAlAnshori/CRUD-Sederhana-HTML-JS"
              demoLink="https://crudsimple.vercel.app/"
            />
          </Col>

          
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudsederhana}
              isBlog={false}
              title="CRUD List Shopping"
              description="Alarm Panic is a simple web app displaying Waktu Indonesia Barat (WIB) with a customizable alarm feature. The modern interface and vibrant design make time management easy and visually appealing."
              ghLink="https://github.com/TajuddinAlAnshori/CRUD-Sederhana-HTML-JS"
              demoLink="https://crudsimple.vercel.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudsederhana}
              isBlog={false}
              title="CRUD List Shopping"
              description="Alarm Panic is a simple web app displaying Waktu Indonesia Barat (WIB) with a customizable alarm feature. The modern interface and vibrant design make time management easy and visually appealing."
              ghLink="https://github.com/TajuddinAlAnshori/CRUD-Sederhana-HTML-JS"
              demoLink="https://crudsimple.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guidejakarta}
              isBlog={false}
              title="Guide Tour DKI Jakarta"
              description="Alarm Panic is a simple web app displaying Waktu Indonesia Barat (WIB) with a customizable alarm feature. The modern interface and vibrant design make time management easy and visually appealing."
              figmaLink="https://crudsimple.vercel.app/"
              demoLink="https://crudsimple.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guidejakarta}
              isBlog={false}
              title="Guide Tour DKI Jakarta"
              description="Alarm Panic is a simple web app displaying Waktu Indonesia Barat (WIB) with a customizable alarm feature. The modern interface and vibrant design make time management easy and visually appealing."
              figmaLink="https://crudsimple.vercel.app/"
              demoLink="https://crudsimple.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guidejakarta}
              isBlog={false}
              title="Guide Tour DKI Jakarta"
              description="Alarm Panic is a simple web app displaying Waktu Indonesia Barat (WIB) with a customizable alarm feature. The modern interface and vibrant design make time management easy and visually appealing."
              figmaLink="https://crudsimple.vercel.app/"
              demoLink="https://crudsimple.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
