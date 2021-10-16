import React, { useEffect } from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
//import { useSelector } from 'react-redux'
import WebFont from "webfontloader";
import FooterComponent from "../FooterComponent/FooterComponent";
import BodyComponent from "../BodyComponent/BodyComponent";

const AppComponent = () => {
  //const codes = useSelector((state) => state.codes)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik:400", "Titillium Web:600", "sans-serif"],
      },
    });
  }, []);

  return (
    <div>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default AppComponent;
