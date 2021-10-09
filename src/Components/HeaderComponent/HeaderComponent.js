import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "shards-react";
import {
  NavbarStyle,
  drescodeLogoOneStyle,
  fontStyleOne,
  NavItemStyleOne,
} from "./Styles";
import drescodeLogoOne from "../../Assets/drescodeLogo_1.svg";
import loginIcon from "../../Assets/loginIcon.svg";
import SocialMediaComponent from "../SicalMediaComponent/SocialMediaComponent";

const HeaderComponent = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <Navbar style={NavbarStyle} type="dark" expand="md">
      <NavbarBrand href="/">
        <img
          style={drescodeLogoOneStyle}
          src={drescodeLogoOne}
          alt="DrescodeLogo"
        />
      </NavbarBrand>
      <NavbarToggler onClick={() => setCollapseOpen(!collapseOpen)} />

      <Collapse open={collapseOpen} navbar>
        <Nav navbar className="ml-auto">
          <NavItem style={NavItemStyleOne}>
            <NavLink active href="#" style={fontStyleOne}>
              Browse codes
            </NavLink>
          </NavItem>
          <NavItem style={NavItemStyleOne}>
            <NavLink active href="#" style={fontStyleOne}>
              <SocialMediaComponent />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active>
              <img src={loginIcon} alt="LoginIcon" />
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
