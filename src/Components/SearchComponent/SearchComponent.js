import React from "react";
import {
  FormInput,
  InputGroup,
  InputGroupAddon,
  Button,
  InputGroupText,
} from "shards-react";
import {
  SearchBarStyles,
  SearchBarPrefixStyle,
  searchIconStyle,
  FormInputStyles,
  searchBarButtonStyles,
  searchBarPrefixButtonStyles,
} from "./Styles";
import SearchIcon from "../../Assets/Icons/searchIcon.svg";

const SearchComponent = () => {
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
        <FormInput style={FormInputStyles} placeholder="Search Codes" />
        <InputGroupAddon style={searchBarPrefixButtonStyles} type="append">
          <Button pill style={searchBarButtonStyles}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchComponent;
