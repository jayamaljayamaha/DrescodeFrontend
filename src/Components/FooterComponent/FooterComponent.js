import React from "react";
import { Container, Row, Col } from "shards-react";
import {
  FooterRowStyle,
  FooterStyle,
  drescodeLogoOneStyle,
  FooterColOneStyle,
  FooterColTwoStyle,
  FooterColThreeStyle,
  copyrightDrescodeLogoStyle,
} from "./Style";
import drescodeLogoOne from "../../Assets/drescodeLogo_1.svg";
import copyRightDrescodeLogo from "../../Assets/Icons/copyRightDrescodeLogo.svg";
import SocialMediaComponent from "../SicalMediaComponent/SocialMediaComponent";
const FooterComponent = () => {
  return (
    <Container fluid={true} style={FooterStyle}>
      <Row style={FooterRowStyle}>
        <Col style={FooterColOneStyle}>
          <img
            style={drescodeLogoOneStyle}
            src={drescodeLogoOne}
            alt="Drescode Logo"
          />
        </Col>
        <Col style={FooterColTwoStyle}>
          <img
            style={copyrightDrescodeLogoStyle}
            src={copyRightDrescodeLogo}
            alt="Copyright Drescode Logo"
          />
        </Col>
        <Col style={FooterColThreeStyle}>
          <Row>
            <Col sm="0" md="6" lg="8"></Col>
            <Col sm="12" md="6" lg="4">
              <SocialMediaComponent />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
