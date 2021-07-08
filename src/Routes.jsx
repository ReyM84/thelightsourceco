import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import { chakra } from "@chakra-ui/react";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            path="/"
            render={() => (
              <div>
                <chakra.img
                  margin="10vh auto"
                  src="https://image.flaticon.com/icons/png/512/1244/1244083.png"
                  alt="404 Page Not Found Image"
                />
                <chakra.h1>404 Page Not Found</chakra.h1>
              </div>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
