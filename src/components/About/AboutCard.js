import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Moch. Tajuddin Al Anshori </span>
            from <span className="purple"> Jakarta, Indonesia.</span>
            <br />
            I hold a Bachelor’s degree in Informatics Engineering from the Institut Teknologi PLN Jakarta.
            I am passionate about technology development, with a focus on UI/UX design and front-end development.
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
