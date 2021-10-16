import React, { useState, useRef } from "react";
import { Card, Container, Row, Col, Alert } from "shards-react";
import {
  CardBodyStyle,
  ColCardBodyStyle,
  ColCardIconsStyle,
  CardIconsStyle,
  ContainerStyle,
  CardHeadingStyle,
  LineNumbersStyle,
  RowCodeContentStyle,
  ColLineNumbersStyle,
  AllCardIconsStyle,
  IconRowStyle,
  SvgIconStyle,
  CodeLineStyle,
  CodeRowStyle,
  CopyAlertStyle,
} from "./Style";
import MoreDetailsIcon from "../../Assets/Icons/moreDetailsIcon.svg";
import CopyIcon from "../../Assets/Icons/copyIcon.svg";
import InfoIcon from "../../Assets/Icons/infoIcon.svg";
import { Scrollbars } from "react-custom-scrollbars";

const CodeComponent = ({ code }) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const myRef = useRef(null);
  //console.log(scrollTop);

  return (
    <div>
      <Container fluid style={ContainerStyle}>
        <Row>
          <Col
            className="col-card-body"
            xs="11"
            sm="11"
            md="11"
            lg="11"
            style={ColCardBodyStyle}
          >
            <Card className="card-body" style={CardBodyStyle}>
              <Row>
                <Col xs="3" sm="3" md="3" lg="3">
                  <div className="card-heading" style={CardHeadingStyle}>
                    JAVA
                  </div>
                </Col>
                <Col xs="9" sm="9" md="9" lg="9" style={{ paddingLeft: "50%" }}>
                  <Alert
                    className="mb-3"
                    style={CopyAlertStyle}
                    open={alertVisible}
                    theme="success"
                  >
                    Copied!
                  </Alert>
                </Col>
              </Row>
              <Row className="row-code-content" style={RowCodeContentStyle}>
                <Col className="col-line-numbers" xs="1" sm="1" md="1" lg="1">
                  <div
                    ref={myRef}
                    // autoHide
                    // autoHideTimeout={100}
                    style={ColLineNumbersStyle}
                  >
                    <RenderLineNumbers codes={code.code} />
                  </div>
                </Col>
                <Col
                  xs="11"
                  sm="11"
                  md="11"
                  lg="11"
                  style={{
                    margin: "10px 0",
                  }}
                >
                  <Scrollbars
                    onScroll={(event) => {
                      myRef.current.scrollTop = event.target.scrollTop;
                    }}
                    autoHide
                    autoHideTimeout={100}
                  >
                    <RenderCodes codes={code.code} />
                  </Scrollbars>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col
            className="col-card-icons"
            xs="1"
            sm="1"
            md="1"
            lg="1"
            style={ColCardIconsStyle}
          >
            <Card className="card-icons" style={CardIconsStyle}>
              <div className="all-card-icons" style={AllCardIconsStyle}>
                <Row className="icon-row" style={IconRowStyle}>
                  <Col>
                    <img
                      style={SvgIconStyle}
                      src={MoreDetailsIcon}
                      alt="More details icon"
                    />
                  </Col>
                </Row>
                <Row className="icon-row" style={IconRowStyle}>
                  <Col>
                    <img
                      style={SvgIconStyle}
                      src={CopyIcon}
                      alt="Copy icon"
                      onClick={() => {
                        setAlertVisible(true);
                        setTimeout(() => {
                          setAlertVisible(false);
                        }, 1000);
                        navigator.clipboard.writeText("Test copy");
                      }}
                    />
                  </Col>
                </Row>
                <Row className="icon-row" style={IconRowStyle}>
                  <Col>
                    <img style={SvgIconStyle} src={InfoIcon} alt="Info icon" />
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// const onScrolling = (event) => {
//   console.log(event.target.scrollTop);
//   setScrollTop()
// };

const RenderLineNumbers = ({ codes }) => {
  return codes.map((code) => {
    return (
      <Row key={`line_${code._id}`}>
        <Col>
          <div className="line-numbers" style={LineNumbersStyle}>
            {code.lineNumber}
          </div>
        </Col>
      </Row>
    );
  });
};

const RenderCodes = ({ codes }) => {
  return codes.map((code) => {
    if (code.code === "") {
      return (
        <Row key={`code_${code._id}`} style={CodeRowStyle}>
          <Col>
            <div
              className="code-lines"
              style={{
                ...CodeLineStyle,
                paddingLeft: `${code.indentation * 20}px`,
                opacity: 0,
              }}
            >
              {"."}
            </div>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row key={`code_${code._id}`} style={CodeRowStyle}>
          <Col>
            <div
              className="code-lines"
              style={{
                ...CodeLineStyle,
                paddingLeft: `${code.indentation * 20}px`,
              }}
            >
              {code.code}
            </div>
          </Col>
        </Row>
      );
    }
  });
};

export default CodeComponent;
