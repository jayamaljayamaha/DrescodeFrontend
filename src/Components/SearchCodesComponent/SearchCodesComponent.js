import React from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import { Route } from "react-router-dom";
import SearchCodesDefaultComponent from "../SearchCodesDefaultComponent/SearchCodesDefaultComponent";
import CodesComponent from "../CodesComponent/CodesComponent";
const SearchCodesComponent = () => {
  return (
    <div>
      <SearchComponent />
      <Route path="/" component={SearchCodesDefaultComponent} />
      <Route path="/codes" component={CodesComponent} />
    </div>
  );
};

export default SearchCodesComponent;
