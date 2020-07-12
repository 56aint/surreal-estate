import React from "react";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
// import Home from "./Home";
import "../styles/PropertyCard.css";
import PropertyCard from "./PropertyCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={PropertyCard} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
