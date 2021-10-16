import React from "react";
import SearchComponent from "../SearchComponent/SearchComponent";
import { Route, Switch } from "react-router-dom";
import SearchCodesDefaultComponent from "../SearchCodesDefaultComponent/SearchCodesDefaultComponent";
import CodesComponent from "../CodesComponent/CodesComponent";
const SearchCodesComponent = () => {
  return (
    <div>
      <SearchComponent />
      <Switch>
        <Route path="/" exact component={SearchCodesDefaultComponent} />
        <Route path="/codes" component={CodesComponent} />
      </Switch>
    </div>
  );
};

export default SearchCodesComponent;
