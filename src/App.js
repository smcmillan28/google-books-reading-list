import './App.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router basename="/">
      <Header />
      <Switch>
        <Route exact path="/saved" component={Saved} />
        <Route exact path={["/", "/search"]} component={Search} />
        <Route exact path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
