import React, { useEffect } from "react";
import { Container, Row, Col } from "shards-react";
import CodeComponent from "../CodeComponent/CodeComponent";
import { ContainerStyle } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { fetchCodes } from "../../Redux/Actions/CodeActions";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router-dom";
const queryString = require("query-string");
const CodesComponent = () => {
  const { search } = useLocation();
  const { tags } = queryString.parse(search);
  const codesState = useSelector((state) => state.codes);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("re rendereing");
    dispatch(fetchCodes({ tags: tags }));
  }, [tags]);

  return (
    <div>
      <Container style={ContainerStyle} fluid>
        <Row>
          <RenderCodes
            isLoading={codesState.isLoading}
            codes={codesState.codes}
          />
        </Row>
      </Container>
    </div>
  );
};

const RenderCodes = ({ isLoading, codes }) => {
  if (isLoading) {
    return <CircularProgress />;
  } else {
    return codes.map((code) => {
      return (
        <Col xl="6" style={{ padding: 10 }}>
          <CodeComponent code={code} />
        </Col>
      );
    });
  }
};

export default CodesComponent;
