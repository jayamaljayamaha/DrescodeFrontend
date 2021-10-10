import React from "react";
import { ParentStyle, TextOneStyle, TextTwoStyle } from "./Styles";

const SearchCodesDefaultComponent = () => {
  return (
    <div style={ParentStyle}>
      <p style={TextOneStyle}>Search for codes as your preferences</p>
      <p style={TextTwoStyle}>By @Randomn</p>
    </div>
  );
};

export default SearchCodesDefaultComponent;
