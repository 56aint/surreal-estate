import React, { useState } from "react";
import "../styles/App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Home from "./Home";
// import "../styles/PropertyCard.css";
import Favourites from "./Favourites";
import Footer from "./Footer";

function App() {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.id);
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserID(""));
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/properties"
          render={(props) => <Properties {...props} userID={userID} />}
        />
        <Route exact path="/add-property" component={AddProperty} />

        <Route
          exact
          path="/favourites"
          render={(props) => <Favourites {...props} userID={userID} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
