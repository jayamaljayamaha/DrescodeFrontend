import React, { useEffect } from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
//import { useSelector } from 'react-redux'
import WebFont from "webfontloader";
import FooterComponent from "../FooterComponent/FooterComponent";

const AppComponent = () => {
  //const codes = useSelector((state) => state.codes)
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Rubik:400", "sans-serif"],
      },
    });
  }, []);

  return (
    <div>
      <HeaderComponent />
      <FooterComponent />
    </div>
  );
};

export default AppComponent;
