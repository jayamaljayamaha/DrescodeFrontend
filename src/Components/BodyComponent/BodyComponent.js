import React from "react";
import SearchCodesComponent from "../SearchCodesComponent/SearchCodesComponent";
import { BodyStyle } from "./Styles";
import { BrowserRouter, Route } from "react-router-dom";
const BodyComponent = () => {
  return (
    <BrowserRouter>
      <div style={BodyStyle} className="body">
        <Route path="/" component={SearchCodesComponent} />
      </div>
    </BrowserRouter>
  );
};

export default BodyComponent;
