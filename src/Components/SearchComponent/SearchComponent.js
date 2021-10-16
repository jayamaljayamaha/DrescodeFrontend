import React, { useState } from "react";
import {
  FormInput,
  InputGroup,
  InputGroupAddon,
  Button,
  InputGroupText,
  Container,
  Row,
  Col,
} from "shards-react";
import {
  SearchBarStyles,
  SearchBarPrefixStyle,
  searchIconStyle,
  FormInputStyles,
  searchBarButtonStyles,
  searchBarPrefixButtonStyles,
  ColStyle,
} from "./Styles";
import SearchIcon from "../../Assets/Icons/searchIcon.svg";
import DropDownComponent from "../DropDownComponent/DropDownComponent";
import { useHistory } from "react-router-dom";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleSearch = () => {
    const tags = searchValue.split(" ").join();
    if (history.location.pathname === "/codes") {
      history.replace(`/codes?tags=${tags}`);
    } else {
      history.push(`/codes?tags=${tags}`);
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <InputGroup style={SearchBarStyles}>
        <InputGroupAddon type="append">
          <InputGroupText
            style={SearchBarPrefixStyle}
            className="search-bar-prefix"
          >
            <img style={searchIconStyle} src={SearchIcon} alt="Search Icon" />
          </InputGroupText>
        </InputGroupAddon>
        <FormInput
          value={searchValue}
          onChange={handleChange}
          style={FormInputStyles}
          placeholder="Search Codes"
        />
        <InputGroupAddon style={searchBarPrefixButtonStyles} type="append">
          <Button pill style={searchBarButtonStyles} onClick={handleSearch}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <div className="search-filters">
        <Container fluid>
          <Row>
            <Col style={ColStyle} sm="4" md="4" lg="3" xl="2">
              <DropDownComponent type="Language" />
            </Col>
            <Col style={ColStyle} sm="4" md="4" lg="3" xl="2">
              <DropDownComponent type="Category" />
            </Col>
            <Col style={ColStyle} sm="4" md="4" lg="3" xl="2">
              <DropDownComponent type="Sub Category" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchComponent;
