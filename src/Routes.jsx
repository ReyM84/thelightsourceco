import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            path="/"
            render={() => (
              <div>
                <img src="https://letsdishrecipes.com/wp-content/uploads/2019/09/404-error-logo.jpg" />
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
