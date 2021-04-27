import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Router>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/about">
              {/* <Banner /> */}
            </Route>
            <Route path="/projecten">{/* <Projects /> */}</Route>
          </Switch>
        </Router>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
