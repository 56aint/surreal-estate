import React from "react";
import "../styles/App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Prpoperties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>

      <NavBar />
      <switch>
        <Route path="/" component={Prpoperties}>
          
        </Route>
        <Route path="/add-property" component={AddProperty}>
          
        </Route>
      </switch>
    </div>
  );
}

export default App;
