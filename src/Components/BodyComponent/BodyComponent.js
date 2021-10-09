import React from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import { BodyStyle } from "./Styles";

const BodyComponent = () => {
  return (
    <div style={BodyStyle} className="body">
      <SearchComponent />
    </div>
  );
};

export default BodyComponent;
