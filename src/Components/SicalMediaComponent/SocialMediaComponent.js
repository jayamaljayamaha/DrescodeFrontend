import React from "react";
import { Container, Row, Col } from "shards-react";
import FacebookIcon from "../../Assets/Icons/facebookIcon.svg";
import InstaIcon from "../../Assets/Icons/instaIcon.svg";
import YouTubeIcon from "../../Assets/Icons/youTubeIcon.svg";
const SocialMediaComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={FacebookIcon} alt="Facebook Icon" />
        </Col>
        <Col>
          <img src={InstaIcon} alt="Insta Icon" />
        </Col>
        <Col>
          <img src={YouTubeIcon} alt="YouTube Icon" />
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMediaComponent;
